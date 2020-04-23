import { Pipe, PipeTransform } from '@angular/core';
/*

<p>
  1 m = 100 cm.
1 km = 1,000 m.
1 in (inch) = 2.54 cm.
1232 | converter : 'm' : 'cm'
</p>
*/


@Pipe({
  name: 'convert'/*, pure: false*/
})
export class ConvertPipe implements PipeTransform {

  transform(value: number,
            $in: 'm'|'km'|'in'|'cm',
            $out: 'm'|'km'|'in'|'cm' ): number {
    switch ( $in ) {
      case 'cm':
        return this.converted ( value / 100 , $out );
        break;
      case 'km':
        return this.converted ( value * 1000 , $out );
        break;
      case 'in':
        return this.converted ( value / 39.37 , $out );
        break;
      default:
        return this.converted ( value, $out );
        break;
    }
    return 0;
  }

  private converted( m: number, $out: 'm' | 'km' | 'in' | 'cm' ): number {
    switch ( $out ) {
      case 'cm':
        return m * 100;
        break;
      case 'km':
        return m / 1000;
        break;
      case 'in':
        return m * 39.37;
        break;
      default:
        return m;
        break;
    }
  }
}
