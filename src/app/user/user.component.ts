import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  role = 1;

  constructor( public $user: UserService ) {
    console.log ( $user );
  }

  ngOnInit(): void {
  }

  chgRole( rolID: number ) {
    this.role = rolID;
  }

  add() {
    this.$user.num ++;
  }
}
