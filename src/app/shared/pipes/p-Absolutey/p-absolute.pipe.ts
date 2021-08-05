import { Pipe, PipeTransform } from '@angular/core';

/* 
  absolute: se le pasa un número y devuelve su valor absoluto
*/

@Pipe({
  name: 'pAbsolute'
})
export class PAbsolutePipe implements PipeTransform {

  transform(value: number): number {
    return Math.abs(value);
  }

}
