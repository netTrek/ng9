import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  userList: string[] = [
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
  }

}
