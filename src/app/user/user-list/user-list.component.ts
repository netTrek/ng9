import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild (UserListItemComponent, {static: false})
  listItem: UserListItemComponent;

  @ContentChildren (UserListItemComponent)
  items: QueryList<UserListItemComponent>;

  filtered: User[];
  selectedUser: User;

  private filterStr        = '';
  private userList: User[] = [
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ];
  private nextInd = 4;

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
    this.selectedUser = this.selectedUser?.id === user?.id ? undefined : user;
  }

  addRndUser() {
    const lng = this.nextInd ++;
    this.userList.push (
      { id: lng, firstname: 'paula' + lng, lastname: 'meyer' + lng }
    );
    this.updateFilter ();
  }

  del() {
    this.userList     = this.userList.filter ( value => value?.id !== this.selectedUser?.id );
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
      this.userList.filter ( value => `${value.firstname}${value.lastname}`
        .indexOf ( this.filterStr ) !== - 1 );
  }

  ngAfterContentInit(): void {
    // console.log ( 'afterContentInit', this.listItem );
    // console.log ( 'items', this.items );
    // console.log ( 'items', this.items.toArray() );
    this.items.toArray().forEach( item => {
      item.selectUsr.subscribe ( user => this.handelSelection (user) );
    } );
    // this.items.changes.subscribe(
    //   newList => {
    //     console.log ( newList );
    //   }
    // );
    // this.listItem.selectUsr.subscribe( () => console.log ( this.listItem, 'selected' ) );
  }

  private handelSelection( user: User ) {
    // console.log ( user );
    this.items.toArray().forEach( userItemComp => {
      userItemComp.selected = userItemComp.user?.id === user?.id;
    });
  }
}
