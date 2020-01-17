import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  	console.log(args);
  	let taux = args[0] || 20;
  	
    return value + ((value * taux)/ 100);
  }

}
