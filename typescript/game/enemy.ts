import { GameObject } from './game-object';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Point } from './point';

export class Enemy extends GameObject {
  private runSub: Subscription;

  constructor( imgPath: string = './assets/evil.png') {
    super ( imgPath );
  }

  hit() {
    this.runSub.unsubscribe();
    Point.getInstance().addPoint ( 10 );
    this.remove();
  }

  run() {
    this.runSub = interval ( 20 )
      .subscribe (
        () => {
          this.x += 2;
          this.y += 2;
          if ( this.x > this.maxX ) {
            this.x = 0;
          }
          if ( this.y > this.maxY ) {
            this.y = 0;
          }
        }
      );
  }
}
