import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit( value: any ) {
    console.log ( value );
  }
}
