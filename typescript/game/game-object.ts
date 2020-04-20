import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

export abstract class GameObject {
  private body: HTMLBodyElement;
  private target: HTMLImageElement;
  protected maxX: number;
  protected maxY: number;

  get x(): number {
    return parseInt ( this.target
                          .style.left
                          .replace ( /px$/ig, '' ), 10 );
  }

  set x( value: number ) {
    this.target.style.left = value + 'px';
  }

  get y(): number {
    return parseInt ( this.target
                          .style.top
                          .replace ( /px$/ig, '' ), 10 );
  }

  set y( value: number ) {
    this.target.style.top = value + 'px';
  }

  constructor( private imgPath: string ) {
    this.init ();
  }

  abstract run();
  abstract hit();


  protected remove() {
    this.target.remove();
  }

  private init() {
    this.body = document.querySelector ( 'body' ) as HTMLBodyElement;
    this.addImg ();
    this.setRandomPosition ();
    this.run();
    this.addListener ();
  }

  private addImg() {
    const img: HTMLImageElement = new Image ( 50 );
    img.src                     = this.imgPath;
    img.setAttribute ( 'class', 'gamer' );
    this.target = this.body.appendChild ( img );
  }

  private setRandomPosition() {
    this.maxX = window.screen.availWidth - 100;
    this.maxY = window.screen.availHeight - 100;
    // console.log ( this.maxX );
    this.x    = Math.floor ( Math.random () * this.maxX );
    this.y    = Math.floor ( Math.random () * this.maxY );
  }

  private addListener() {
    fromEvent( this.target, 'click' ).pipe( first() ).subscribe(
      () => this.hit()
    );
  }
}
