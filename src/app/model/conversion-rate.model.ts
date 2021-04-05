export class ConversionRate {
  constructor(
    public amount: number,
    public baseCurrencyCode: string,
    public date: Date
  ) {}
}
