import { Pipe, PipeTransform } from '@angular/core';

/* 
  slice: se le pasa un array, un indice y una longitud y devuelve el 
  trozo del array desde ese índice y con esa longitud
*/

@Pipe({
  name: 'pSlice'
})
export class PSlicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
