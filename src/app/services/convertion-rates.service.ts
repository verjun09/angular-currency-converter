import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConversionRatesService {
  private baseUrl = 'https://free.currconv.com/api/v7/';
  private api_key: string = '1697e9eae2db55341f82';

  constructor(private httpClient: HttpClient) {}

  getLatestExchangeRates(
    baseCurrencyCode: string,
    convertCurrencyCode: string
  ) {
    const symbol = baseCurrencyCode + '_' + convertCurrencyCode;

    const promiseHTTTP = this.httpClient
      .get(
        `${this.baseUrl}convert?apiKey=${this.api_key}&q=${symbol}&compact=y`
      )
      .toPromise();
    return promiseHTTTP;
  }

  getAPICurrencies(): Observable<any> {
    const currenciesURL = `${this.baseUrl}currencies?apiKey=${this.api_key}`;
    return this.httpClient.get(currenciesURL);
  }
}
