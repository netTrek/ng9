import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

export abstract class Gamecharcter {
  constructor( private target: HTMLElement ) {
    this.init ();
  }

  abstract hit();

  private init() {
    fromEvent( this.target, 'click')
      .pipe( first() )
      .subscribe( () => this.hit() );
  }


}
