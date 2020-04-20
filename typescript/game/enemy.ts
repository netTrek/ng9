import { GameObject } from './game-object';
import { interval, Subscription } from 'rxjs';
import { Point } from './point';

export class Enemy extends GameObject {
  private runSub: Subscription;

  constructor( imgPath: string = './assets/evil.png') {
    super ( imgPath );
  }

  destroy() {
    this.runSub.unsubscribe();
    this.clickSub.unsubscribe();
    this.remove();
  }

  hit() {
    this.destroy();
    Point.getInstance().addPoint ( 10 );
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
