import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { timer } from 'rxjs';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit, AfterViewInit {

  filtered: User[];
  selectedUser: User;
  // mit read wurde hier def., dass das HTML Element angefragt wird
  @ViewChild ( UserListItemComponent, { read: ElementRef } )
  item: ElementRef<HTMLElement>;
  @ViewChild ( 'val' )
  inputElem: ElementRef<HTMLInputElement>;
  /*
  @ViewChild ( 'myLine' )
  hr: ElementRef<HTMLHRElement>;
  */
  @ViewChildren ( UserListItemComponent )
  users: QueryList<UserListItemComponent>;

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

  ngAfterViewInit(): void {
    // console.log ( this.item  );
    // this.item.nativeElement.style.color = 'red'; // wenn SSR nie in Frage kommen wird
    // so bitte, falls SSR eine zukünftige Option ist
    // this.renderer.setStyle ( this.item.nativeElement, 'color', 'red' );
    // console.log ( this.hr );
    console.log ( this.inputElem );
    // this.users.first.selected = true; // nicht direkt setzen, weil er sich im dirty Zustand befindet
    console.log ( this.users.first.selected );
    timer ( 0 )
      .subscribe (
        () => {
          this.users.first.selected = true;
          this.selectedUser         = this.users.first.user;
        }
      );
  }

  ngOnInit(): void {
    // for ( const $user of this.userList ) {
    //   console.log ( $user );
    // }
    this.filtered = [...this.userList];
  }

  setAsSelected( user: User ) {
    // if ( this.selectedUser !== $user) {
    //   this.selectedUser = $user;
    // } else {
    //   this.selectedUser = undefined;
    // }
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

  sendValueFromInput( value: string ) {
    console.log ( 'hello', value );
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
