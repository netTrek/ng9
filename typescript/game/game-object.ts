import { fromEvent, Subject, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { GameCtrl } from './game-ctrl';

export abstract class GameObject {

  readonly hit$: Subject<GameObject> = new Subject<GameObject>()
  private body: HTMLBodyElement;
  private target: HTMLImageElement;
  protected clickSub: Subscription;
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
  abstract destroy();


  protected remove() {
    this.target.remove();
    this.hit$.next( this );
    this.hit$.complete();
    // GameCtrl.getInstance().remove ( this );
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
    img.setAttribute ( 'draggable', 'false' );
    this.target = this.body.appendChild ( img );
  }

  private setRandomPosition() {
    this.maxX = window.screen.availWidth - 100;
    this.maxY = window.screen.availHeight - 100;
    this.x    = Math.floor ( Math.random () * this.maxX );
    this.y    = Math.floor ( Math.random () * this.maxY );
  }

  private addListener() {
    this.clickSub = fromEvent( this.target, 'click' ).pipe( first() ).subscribe(
      () => this.hit()
    );
  }
}
