import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls: ['./binding-sample.component.scss']
})
export class BindingSampleComponent implements OnInit {
  myString = 'saban';
  myNum =  123;
  myObj = { username: 'saban', userlastname: 'ünlü' };
  imgFile = 'cat1.jpeg';
  vorname = 'saban';
  nachnamen = 'ünlü';

  constructor() { }

  ngOnInit(): void {
  }

  getString(prefix?: string|number ) {
    return prefix ? `${prefix} ${this.myString}` : this.myString;
  }

  add() {
    this.myNum ++;
    this.imgFile = 'cat2.jpeg';
  }
}
