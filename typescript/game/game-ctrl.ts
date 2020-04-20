import { Point } from './point';
import { Enemy } from './enemy';
import { Friend } from './friend';
import { GameObject } from './game-object';

class Inner {
}

export class GameCtrl {

  static INSTANCE: GameCtrl;
  private score: Point;
  private enemies: Enemy[]  = [];
  private friends: Friend[] = [];
  private disposing         = false;

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

  remove( gameObj: GameObject ) {
    const enemyId  = this.enemies.indexOf ( gameObj as Enemy );
    const friendId = this.friends.indexOf ( gameObj as Friend );
    if ( enemyId !== - 1 ) {
      this.enemies.splice ( enemyId, 1 );
    }
    if ( friendId !== - 1 ) {
      this.friends.splice ( friendId, 1 );
    }
    if ( !this.disposing && this.enemies.length === 0 ) {
      this.dispose ();
      alert ( 'you won' );
    }
    if ( !this.disposing && this.friends.length === 0 ) {
      this.dispose ();
      alert ( 'you lost' );
    }
  }

  private init() {
    this.score = Point.getInstance ();
    for ( let i = 0; i < 20; i ++ ) {
      if ( i % 2 === 0 ) {
        this.enemies.push ( new Enemy () );
      } else {
        this.friends.push ( new Friend () );
      }
    }
  }

  private dispose() {
    this.disposing = true;
    while ( this.enemies.length > 0 ) {
      this.enemies.pop ()
          .destroy ();
    }
    while ( this.friends.length > 0 ) {
      this.friends.pop ()
          .destroy ();
    }
  }
}
