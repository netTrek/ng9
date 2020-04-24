import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  role = 1;

  ngOnInit(): void {
  }

  chgRole( rolID: number ) {
    this.role = rolID;
  }

}
