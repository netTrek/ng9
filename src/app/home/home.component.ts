import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router: Router ) { }

  ngOnInit(): void {
  }

  go2Usr() {
    this.$router.navigate( [ 'user'] );
  }
}
