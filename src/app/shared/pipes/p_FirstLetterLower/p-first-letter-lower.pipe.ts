import { Pipe, PipeTransform } from '@angular/core';

/* RECORDAR METER LAS PIPES EN LOS EXPORTS DEL MODULO */

@Pipe({
	name: 'pFirstLetterLower'
})
export class PFirstLetterLowerPipe implements PipeTransform {

	transform(value: string): string {
		if (!value) {
			return '';
		}
		return value[0].toLowerCase() + value.substring(1).toUpperCase();
	}

}
