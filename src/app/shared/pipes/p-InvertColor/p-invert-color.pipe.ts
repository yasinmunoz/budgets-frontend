import { Pipe, PipeTransform } from '@angular/core';

/* 
  invert color: se le pasa un color y devuelve otro complementario o blaco o negro. 
  útil  para fondos y sus letras.
*/

@Pipe({
  name: 'pInvertColour'
})
export class PInvertColorPipe implements PipeTransform {

  transform(color: any): unknown {
    return color.complement;
  }

}
