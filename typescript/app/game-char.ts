import { GameObj } from './game-obj';

export class GameChar implements GameObj {
  name: string;
  point: number;

  set x( value: number ) {
    this.target.style.left = value + 'px';
  }

  get x(): number {
    return
    parseInt ( this.target
                   .style.left
                   .replace (/px$/ig, ''), 10 );
  }

  set y( value: number ) {
    this.target.style.top = value + 'px';
  }

  get y(): number {
    return
    parseInt ( this.target
                   .style.top
                   .replace (/px$/ig, ''), 10 );
  }

  constructor( public target: HTMLElement ) {
    this.init ();
  }

  run() {
  }

  private init() {
    this.x = this.y = 10;
  }
}
