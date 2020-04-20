class Inner {
}

export class Point {

  static INSTANCE: Point;
  private target: HTMLElement;
  private value = 0;

  constructor( singleton: Inner ) {
    this.init();
  }

  static getInstance(): Point {
    if ( !Point.INSTANCE ) {
      Point.INSTANCE = new Point ( new Inner () );
    }
    return Point.INSTANCE;
  }

  private init() {
    this.target = document.querySelector( '#score' ) as HTMLElement;
    this.writeScore();
  }

  addPoint( val: number ) {
    this.value += val;
    this.writeScore();
  }

  private writeScore() {
    this.target.innerText = this.value.toString( 10 );
  }
}
