import { GameObj } from './game-obj';
import { from, fromEvent, interval, of } from 'rxjs';
import { first, take } from 'rxjs/operators';

export class GameChar implements GameObj {
  name: string;
  point: number;

  get x(): number {
    return parseInt ( this.target
                          .style.left
                          .replace ( /px$/ig, '' ), 10 );
  }

  set x( value: number ) {
    this.target.style.left = value + 'px';
  }

  get y(): number {
    return parseInt ( this.target
                          .style.top
                          .replace ( /px$/ig, '' ), 10 );
  }

  set y( value: number ) {
    this.target.style.top = value + 'px';
  }

  constructor( public target: HTMLElement ) {
    this.init ();
  }

  run() {
    console.log ( 'run' );
    interval ( 20 )
      .pipe (
        take ( 100 )
      )
      .subscribe (
        () => {
          this.x += 2;
          this.y += 2;
        }
      );
    // window.setInterval( () => {
    //   this.x += 2;
    //   this.y += 2;
    // }, 20 );
  }

  private init() {
    this.x = this.y = 0;
    // this.target.addEventListener( 'click', () => {
    //   this.run();
    // });
    fromEvent ( this.target, 'click' )
      .pipe (
        // take ( 1 )
        first ()
      )
      .subscribe (
        () => {
          this.run ();
        }
      );

    of ( [1,
            2,
            3,
            4
    ] )
      .subscribe (
        (next) => {
          console.log ( next );
        }
      );
  }
}
