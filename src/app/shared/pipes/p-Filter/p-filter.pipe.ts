import { Pipe, PipeTransform } from '@angular/core';

/* 
  filter: se le pasa un array y unas condiciones y devuelve los elementos
  del array que cumplan dichas condiciones
*/

@Pipe({
  name: 'pFilter'
})
export class PFilterPipe implements PipeTransform {

  transform(vector: any[], ...properties: unknown[]): any[] {

    return vector;
  }

}
