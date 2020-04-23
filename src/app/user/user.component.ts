import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: User[] = [
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ];

  constructor() {
  }

  ngOnInit(): void {
    // timer( 1500 ).pipe(first()).subscribe( () => this.userList.pop() );
  }
}
