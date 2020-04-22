import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  filtered: string[];
  selectedUser: string;

  private filterStr = '';
  private userList: string[] = [
    'saban',
    'heike',
    'peter'
  ];
  constructor() {
  }

  ngOnInit(): void {
    // for ( const user of this.userList ) {
    //   console.log ( user );
    // }
    this.filtered = [...this.userList];
  }

  setAsSelected( user: string ) {
    // if ( this.selectedUser !== user) {
    //   this.selectedUser = user;
    // } else {
    //   this.selectedUser = undefined;
    // }
    this.selectedUser = this.selectedUser === user ? undefined : user;
  }

  addRndUser() {
    this.userList.push(
      ['frank', 'paula', 'heiko', 'hanna'][Math.round( Math.random() * 3)]
    );
    this.updateFilter();
  }

  del() {
    this.userList = this.userList.filter( value => value !== this.selectedUser );
    this.selectedUser = undefined;
    this.updateFilter();
  }

  filter( chgEvent: Event ) {
    this.filterStr = (chgEvent.target as HTMLInputElement)
      .value;
    this.updateFilter();
  }

  private updateFilter() {
      this.filtered =
        this.userList.filter( value => value.indexOf( this.filterStr ) !== -1 );
  }

}
