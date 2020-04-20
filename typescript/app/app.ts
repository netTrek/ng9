import { fromEvent } from 'rxjs';
import { handelEventFor } from './decorators';

export class App {
  private h1: HTMLHeadingElement;

  constructor() {
    this.init ();
  }

  private init() {
    // this.h1 = $('body main h1') as unknown as HTMLHeadingElement;
    this.h1 = document.querySelector ( 'body main h1' ) as HTMLHeadingElement;
    console.log ( 'app', this.h1 );
    this.h1.style.color = 'red';
    fromEvent ( this.h1, 'click' )
      .subscribe (
        value => this.h1.style.color = this.h1.style.color === 'red' ? 'blue' : 'red'
      );
  }

  @handelEventFor( 'body main h1', 'click' )
  click() {
    console.log ( 'rock and rool' );
  }
}
