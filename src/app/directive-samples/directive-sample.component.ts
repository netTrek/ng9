import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss']
})
export class DirectiveSampleComponent implements OnInit {
  showImg = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showImg = !this.showImg;
  }
}
