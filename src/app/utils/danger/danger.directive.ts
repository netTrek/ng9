import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

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

  @Input()
  plDanger = 'hello world';
  constructor( /*private elemRef: ElementRef*/ ) {
    // console.log ( 'hello world'/*, elemRef*/ );
  }

  @HostListener ( 'click' )
  clicked() {
    if ( confirm ( this.plDanger.length > 0 ? this.plDanger : 'willst du das wirklich' ) ) {
      this.confirmed.emit();
    }
  }
}
