import { Point } from './point';
import { Enemy } from './enemy';
import { Friend } from './friend';

class Inner {
}

export class GameCtrl {

  static INSTANCE: GameCtrl;
  private score: Point;
  private enemies: Enemy[] = [];
  private friends: Friend[] = [];

  constructor( singleton: Inner ) {
    console.log ( 'gameCtrl' );
    this.init ();
  }

  static getInstance(): GameCtrl {
    if ( !GameCtrl.INSTANCE ) {
      GameCtrl.INSTANCE = new GameCtrl ( new Inner () );
    }
    return GameCtrl.INSTANCE;
  }

  private init() {
    this.score = Point.getInstance ();
    for ( let i = 0; i < 10; i ++ ) {
      if ( i % 2 === 0 ) {
        this.enemies.push( new Enemy () );
      } else {
        this.friends.push( new Friend() );
      }
    }
  }
}
