import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyPipeObj', pure: false })
export class currencyPipeObj implements PipeTransform {
  transform(value: Object): Array<string> {
    return Object.keys(value).sort();
  }
}
