import { Pipe, PipeTransform } from '@angular/core';

/* 
  sumBy: se le pasa un array de números y devuelve el resultado. 
  También se le puede pasar un array de objetos y una propiedad 
  y devuelve la suma de los valoers de esa propiedad
*/

@Pipe({
	name: 'pSumBy'
})
export class PSumByPipe implements PipeTransform {

	transform(value: any[], property?: number): number {
		let sum: number = 0;

		if (value[0] instanceof (Number)) {
			value.forEach(element => {
				sum += element;
			});
			//return sum;
		} else {
			value.forEach(element => {
				sum += element;
			});
		}
		return sum;
	}

}
