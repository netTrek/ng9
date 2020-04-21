import { Point } from './point';
import { Enemy } from './enemy';
import { Friend } from './friend';
import { GameObject } from './game-object';
import { take } from 'rxjs/operators';

class Inner {
}

export class GameCtrl {

  static INSTANCE: GameCtrl;
  private score: Point;
  private enemies: Enemy[]  = [];
  private friends: Friend[] = [];
  private disposing         = false;

  private constructor( ) {
    this.init ();
  }

  static getInstance(): GameCtrl {
    if ( !GameCtrl.INSTANCE ) {
      GameCtrl.INSTANCE = new GameCtrl (  );
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
    this.checkForGameState ();
  }

  private checkForGameState() {
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
    for ( let i = 0; i < 10; i ++ ) {
      const go: GameObject = this.getRandomGameObj ();
      go.hit$.pipe ( take ( 1 ) )
        .subscribe (
          gameObj => this.remove ( gameObj )
        );
    }
  }

  private getRandomGameObj() {
    let go: GameObject;
    if ( Math.random () > .4 ) {
      go = new Enemy ();
      this.enemies.push ( go as Enemy );
    } else {
      go = new Friend ();
      this.friends.push ( go as Friend );
    }
    return go;
  }

  private dispose() {
    this.disposing = true;
    this.releaseAllObj ( this.enemies );
    this.releaseAllObj ( this.friends );
  }

  private releaseAllObj( list: (Friend | Enemy)[] ) {
    while ( list.length > 0 ) {
      list.pop ()
          .destroy ();
    }
  }
}
