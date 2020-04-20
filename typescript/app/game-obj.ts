export interface GameObj {
  target: HTMLElement;
  x: number;
  y: number;
  name: string;
  point: number;
  run();
}
