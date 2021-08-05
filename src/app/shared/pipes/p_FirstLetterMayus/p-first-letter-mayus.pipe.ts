import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pFirstLetterMayus'
})
export class PFirstLetterMayusPipe implements PipeTransform {

  transform(value: string): String {
    if(!value){
      return '';
    }
    // substr sub-string empezando en la posicion x
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
