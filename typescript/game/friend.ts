import { GameObject } from './game-object';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Point } from './point';

export class Friend extends GameObject {
  private runSub: Subscription;
  constructor( imgPath: string = './assets/cute.png') {
    super ( imgPath );
  }

  hit() {
    this.runSub.unsubscribe();
    Point.getInstance().addPoint ( -20 );
    this.remove();
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
