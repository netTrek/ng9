import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  filtered: User[];
  selectedUser: User;

  private filterStr        = '';
  private userList: User[] = [
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ];

  constructor() {
  }

  ngOnInit(): void {
    // for ( const user of this.userList ) {
    //   console.log ( user );
    // }
    this.filtered = [...this.userList];
  }

  setAsSelected( user: User ) {
    // if ( this.selectedUser !== user) {
    //   this.selectedUser = user;
    // } else {
    //   this.selectedUser = undefined;
    // }
    this.selectedUser = this.selectedUser?.id === user.id ? undefined : user;
  }

  addRndUser() {
    const lng = this.userList.length;
    this.userList.push (
      { id: lng, firstname: 'paula' + lng, lastname: 'meyer' + lng }
    );
    this.updateFilter ();
  }

  del() {
    this.userList     = this.userList.filter ( value => value !== this.selectedUser );
    this.selectedUser = undefined;
    this.updateFilter ();
  }

  filter( chgEvent: Event ) {
    this.filterStr = (chgEvent.target as HTMLInputElement)
      .value;
    this.updateFilter ();
  }

  private updateFilter() {
    this.filtered =
      this.userList.filter ( value => `${value.firstname}{value.lastname}`
        .indexOf ( this.filterStr ) !== - 1 );
  }

}
