import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  
  inputValue: number | null = null; 
  formattedInputValue: string = '';  
  outputValue: number = 0;
  formattedOutputValue: string = '0,00';

  fromCurrency: string = 'BRL';
  toCurrency: string = 'USD';
  exchangeRates: any = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.loadExchangeRates(this.fromCurrency); 
  }

  loadExchangeRates(baseCurrency: string) {
    this.currencyService.getExchangeRates(baseCurrency).subscribe((data) => {
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
}
