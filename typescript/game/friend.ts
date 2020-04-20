import { GameObject } from './game-object';
import { interval, Subscription } from 'rxjs';
import { Point } from './point';

export class Friend extends GameObject {
  private runSub: Subscription;
  constructor( imgPath: string = './assets/cute.png') {
    super ( imgPath );
  }

  destroy() {
    this.runSub.unsubscribe();
    this.clickSub.unsubscribe();
    this.remove();
  }

  hit() {
    this.destroy();
    Point.getInstance().addPoint ( -20 );
  }

  run() {
    this.runSub = interval ( 20 )
      .subscribe (
        () => {
          this.x += 1;
          this.y += 1;
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
