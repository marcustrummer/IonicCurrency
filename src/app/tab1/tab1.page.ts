import { Component } from '@angular/core';
import { ViewWillLeave } from '@ionic/angular';  
import { CurrencyService } from '../services/currency.service';  

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
export class Tab1Page implements ViewWillLeave {

  inputValue: number | null = null;
  formattedInputValue: string = '';
  outputValue: number = 0;
  formattedOutputValue: string = '0,00';

  fromCurrency: string = 'BRL';
  toCurrency: string = 'USD';
  exchangeRates: any = {};

  transactionHistory: any[] = [];

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
    });
  }

  convertCurrency() {
    if (this.exchangeRates && this.exchangeRates[this.toCurrency]) {
      const rate = this.exchangeRates[this.toCurrency];
      this.outputValue = this.inputValue && this.inputValue >= 0 ? this.inputValue * rate : 0;
      this.formattedOutputValue = this.formatCurrency(this.outputValue);
    }
  }

  formatCurrency(value: number): string {
    return value.toFixed(2).replace('.', ',');
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
    if (this.inputValue !== null && this.inputValue >= 0) {
      const transaction = {
        inputValue: this.inputValue,
        fromCurrency: this.fromCurrency,
        toCurrency: this.toCurrency,
        outputValue: this.outputValue,
        formattedOutputValue: this.formattedOutputValue,
        timestamp: new Date().toLocaleString(),
      };

      this.transactionHistory.push(transaction);
      localStorage.setItem('transactionHistory', JSON.stringify(this.transactionHistory));
    } else {
      console.log('Erro: valores inválidos para salvar transação');
    }
  }

  loadTransactionHistory() {
    const savedHistory = localStorage.getItem('transactionHistory');
    if (savedHistory) {
      this.transactionHistory = JSON.parse(savedHistory);
    }
  }
}
