export class Human {

  static MY_VAL = 123;
  // private name: string;
  // name: string; // public falls nicht def.

  get color(): number | string {
    return this._color;
  }

  set color( value: number | string ) {
    this._color = value;
  }

  get age(): number {
    return this._age;
  }

  set age( value: number ) {
    if ( value === 0 ) {
      throw new Error( 'du musst älter sein');
    }
    this._age = value;
  }

/* tslint:disable */
  private _color: number|string;
  private _age: number;
/* tslint:enable */

  constructor( public name: string ) {
    // this.name = name;
    this.init ();
  }

  sayYourName() {
    return this.name;
  }

  // paramsMag( val: string ) {
  // paramsMag( val?: string ) { // optional
  // paramsMag( val: string = 'hello world' ) { // default
  // paramsMag( p1?: number, p2: number, val: string = 'hello world' ) { // default
  paramsMag( val: string = 'hello world' ) { // default
    console.log ( val, this.name );
  }

  showMsg( ...msg: string[] ) { // Array<string>
    console.log ( msg );
  }

  private init() {
    console.log ( 'new Human', name, this );
  }
}
