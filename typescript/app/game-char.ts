import { GameObj } from './game-obj';

export class GameChar implements GameObj{
  name: string;
  point: number;
  target: HTMLElement;
  x: number;
  y: number;

  run() {
  }
}
