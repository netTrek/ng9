import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { timer } from 'rxjs';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  filtered: User[];
  selectedUser: User;

  @ViewChild ( 'val' )
  inputElem: ElementRef<HTMLInputElement>;

  private filterStr        = '';
  private userList: User[] = [
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ];
  private nextInd          = 4;
  delMsg = '';

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit(): void {
    this.filtered = [...this.userList];
  }

  setAsSelected( user: User ) {
    this.selectedUser = this.selectedUser?.id === user?.id ? undefined : user;
    if ( this.selectedUser ) {
      this.delMsg = 'willst du ' + this.selectedUser.firstname + ' wirklich löschen'
    }
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

  resetFilter() {
    this.filterStr = this.inputElem.nativeElement.value = '';
    this.updateFilter ();
  }

  private updateFilter() {
    this.filtered =
      this.userList.filter ( value => `${value.firstname}${value.lastname}`
        .indexOf ( this.filterStr ) !== - 1 );
  }
}
