/*
function namedFunction() {
  console.log ( 'namedFunc' );
}

const namedFunction = function () {
  console.log ( 'namedFunc' );
};

const namedFunction = () => {
  console.log ( 'namedFunc 123' );
};
namedFunction();

function functWithParam( param ) {
  console.log ( param );
}

const functWithParam = ( p1, p2 ) => {
  console.log ( p1, p2 );
};

functWithParam ( 'hello World', 'ts' );

const functWithParam = p1 => {
  return console.log ( p1 );
};

console.log ( functWithParam ( 'hello World' ) );

const sum = ( s1, s2 ) => {
  return s1 + s2;
};

console.log ( sum ( 1, 2 ) );

const getPi = () => {
  return Math.PI;
};
*/

const multiWith2 = ( s1: number ) => s1 * 2;

console.log ( multiWith2 ( 1 ) );

const getPi = () => Math.PI;

console.log ( getPi() );

function multiWith4( num ) {
  return num * 4;
}

const multiWith3 = num => num * 3;
console.log ( multiWith3( 3 ) );

export class LambdaSamples {
}
