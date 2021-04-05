import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConversionRatesService } from '../../services/convertion-rates.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  convertCurrencyFrom = '';
  convertCurrencyTo = '';
  amountToConvert: number;
  convertedAmount: number;
  currencies: any = {};
  showLoading: boolean = false;

  constructor(private conversionRatesService: ConversionRatesService) {}

  ngOnInit() {
    this.conversionRatesService.getAPICurrencies().subscribe((data) => {
      this.currencies = data.results;
    });
  }

  convertCurrency() {
    this.showLoading = true;
    const getRate = this.conversionRatesService.getLatestExchangeRates(
      this.convertCurrencyFrom,
      this.convertCurrencyTo
    );
    getRate
      .then((data) => {
        const rate = Object.values(data)[0].val;
        this.convertedAmount = this.amountToConvert * rate;
        this.showLoading = false;
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
        this.showLoading = false;
      });
  }

  changeCurrency() {
    if (
      this.convertCurrencyFrom != '' &&
      this.convertCurrencyTo != '' &&
      this.amountToConvert != null
    ) {
      this.convertCurrency();
    }
  }

  reverseConvert() {
    const from = this.convertCurrencyFrom;
    const to = this.convertCurrencyTo;
    this.convertCurrencyFrom = to;
    this.convertCurrencyTo = from;
    this.convertCurrency();
  }
}
