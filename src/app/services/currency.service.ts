import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/9a2ce4f6077a41e1b7e3b24c/latest/';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string): Observable<any> {
    const url = `${this.apiUrl}${baseCurrency}`;
    return this.http.get<any>(url);
  }


  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<any> {
    return this.getExchangeRates(fromCurrency).pipe(
      map((data: any) => {
        const rate = data.conversion_rates[toCurrency];

        if (!rate) {
          throw new Error(`Taxa de câmbio não disponível para ${toCurrency}`);
        }

        return amount * rate;
      })
    );
  }
}


// 9a2ce4f6077a41e1b7e3b24c chave usada para acesso na API