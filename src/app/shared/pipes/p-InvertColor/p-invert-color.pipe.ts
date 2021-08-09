import { Pipe, PipeTransform } from '@angular/core';

/* 
  invert color: se le pasa un color y devuelve otro complementario o blaco o negro. 
  útil  para fondos y sus letras.
*/

@Pipe({
  name: 'pInvertColour'
})
export class PInvertColorPipe implements PipeTransform {

  /* transform(color: string): number {

    let hex = '0X' + color.slice(1);
    parseInt(hex);

    const complementaryColor = 0XFFFFFF ^ hex;
    return complementaryColor;
  } */

  transform(hex: string): string {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
  }

  padZero(str: string, len: number = 2) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

}
