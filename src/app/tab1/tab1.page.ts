import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, LineController, PointElement } from 'chart.js';
import { CurrencyService } from '../services/currency.service';

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,  
  LineController,
  Title,
  Tooltip,
  Legend
);

interface ExchangeRatesResponse {
  conversion_rates: { [key: string]: number };
  base: string;
  date: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit, OnInit {

  inputValue: number | null = null;
  formattedInputValue: string = '';
  outputValue: number = 0;
  formattedOutputValue: string = '0,00';

  fromCurrency: string = 'BRL';
  toCurrency: string = 'USD';
  exchangeRates: any = {};
  
  transactionHistory: any[] = [];
  chartInstance: any = null; 

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.loadTransactionHistory();  
    this.loadExchangeRates(this.fromCurrency);  
  }

  ionViewWillLeave() {
    this.inputValue = null;
    this.formattedInputValue = '';
    this.outputValue = 0;
    this.formattedOutputValue = '0,00';
  }

  loadExchangeRates(baseCurrency: string) {
    this.currencyService.getExchangeRates(baseCurrency).subscribe((data: ExchangeRatesResponse) => {
      this.exchangeRates = data.conversion_rates;
      this.convertCurrency();
      this.updateGraph();  
    });
  }

  convertCurrency() {
    if (this.exchangeRates && this.exchangeRates[this.toCurrency]) {
      const rate = this.exchangeRates[this.toCurrency];
      this.outputValue = this.inputValue && this.inputValue >= 0 ? this.inputValue * rate : 0;
      this.formattedOutputValue = this.formatCurrency(this.outputValue);
      this.updateGraph();  
    }
  }

  formatCurrency(value: number): string {
    return value.toFixed(2).replace('.', ',');
  }

  
  updateGraph() {
    const fromRate = this.exchangeRates[this.fromCurrency] || 1; 
    const toRate = this.exchangeRates[this.toCurrency] || 1; 

    const ctx = (document.getElementById('currencyChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: 'line',  
        data: {
          labels: [this.fromCurrency, this.toCurrency],  
          datasets: [{
            label: `Comparação de ${this.fromCurrency} e ${this.toCurrency}`,
            data: [this.inputValue, this.outputValue],  
            borderColor: '#5948b6',
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Moedas'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Valor'
              }
            }
          }
        }
      });
    }
  }

  ngAfterViewInit() {
    
    this.updateGraph();
  }

  loadTransactionHistory() {
    const savedHistory = localStorage.getItem('transactionHistory');
    if (savedHistory) {
      try {
        this.transactionHistory = JSON.parse(savedHistory); 
      } catch (error) {
        console.error('Erro ao carregar o histórico de transações:', error);
      }
    }
  }

  onFromCurrencyChange() {
    this.loadExchangeRates(this.fromCurrency);  
  }

  
  onToCurrencyChange() {
    this.convertCurrency();  
  }

  onSwapCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.loadExchangeRates(this.fromCurrency);  
  }

  saveTransaction() {
    const transaction = {
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency,
      amount: this.inputValue,
      convertedAmount: this.outputValue,
      date: new Date().toISOString(),
    };

    this.transactionHistory.push(transaction);
    localStorage.setItem('transactionHistory', JSON.stringify(this.transactionHistory)); 
  }

  onInputChange(event: any) {
    let input = event.target.value.replace(',', '.');
    this.inputValue = parseFloat(input);

    if (this.inputValue < 0) {
      this.inputValue = null;
      this.formattedInputValue = '';
    } else {
      this.formattedInputValue = this.formatCurrency(this.inputValue ?? 0);
    }

    this.convertCurrency();  
}
}