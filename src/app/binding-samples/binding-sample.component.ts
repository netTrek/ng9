import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pl-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls  : ['./binding-sample.component.scss']
} )
export class BindingSampleComponent implements OnInit {
  myString  = 'saban';
  myNum     = 123;
  myObj     = { username: 'saban', userlastname: 'ünlü' };
  imgFile   = 'cat1.jpeg';
  vorname   = 'saban';
  nachnamen = 'ünlü';
  imgPath   = './assets/images/cat1.jpeg';
  // classList = 'font-red font-bold';
  classList = 'font-red';
  showRed = false;
  width = 60;

  constructor() {
  }

  ngOnInit(): void {
  }

  getString( prefix?: string | number ) {
    return prefix ? `${prefix} ${this.myString}` : this.myString;
  }

  add( num: number = 5, $event: MouseEvent ) {
    console.log ( $event );
    this.myNum += num;
    this.imgFile = 'cat2.jpeg';
    this.imgPath = './assets/images/cat2.jpeg';
    this.showRed = !this.showRed;
    this.width -= num;
  }

  in() {
    console.log ( 'in' );
  }

  out() {
    console.log ( 'out' );
  }

  over() {
    console.log ( 'over' );
  }
}
