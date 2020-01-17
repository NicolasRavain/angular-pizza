import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  	let tax = args[0] || 20;
  	let result = value * (1 + tax / 100);

    return result.toFixed(2).replace('.', '.');
  }

}
