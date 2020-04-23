import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive ( {
  selector: 'button[plDanger], a[plDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.fontWeight' )
  fontWeight = 'bold';

  @HostBinding ( 'style.backgroundColor' )
  backgroundColor = 'red';

  @Output () confirmed: EventEmitter<void> =
               new EventEmitter<void> ();

  constructor( /*private elemRef: ElementRef*/ ) {
    // console.log ( 'hello world'/*, elemRef*/ );
  }

  @HostListener ( 'click' )
  clicked() {
    if ( confirm ( 'willst du das wirklich?' ) ) {
      this.confirmed.emit();
    }
  }
}
