import { Pipe, PipeTransform } from '@angular/core';

/* 
  slice: se le pasa un array, un indice y una longitud y devuelve el 
  trozo del array desde ese índice y con esa longitud
*/

@Pipe({
  name: 'pSlice'
})
export class PSlicePipe implements PipeTransform {
 
   transform(vector: any[], posi_Start: number, lenght_SubArray:number): any[] {
    return vector.slice(posi_Start, posi_Start+lenght_SubArray);
  }
}
