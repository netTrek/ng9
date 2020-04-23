import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.scss']
})
export class PipeSamplesComponent implements OnInit {

  num = Math.PI;
  now = new Date();
  str = 'Saban Ünlü';

  constructor() { }

  ngOnInit(): void {
  }

}
