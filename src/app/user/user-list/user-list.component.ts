import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  filtered: User[];
  selectedUser: User;
  delMsg = '';

  @ViewChild ( 'val' )
  inputElem: ElementRef<HTMLInputElement>;

  private filterStr        = '';


  constructor( public $user: UserService) {
  }

  ngOnInit(): void {
    this.$user.userList$.subscribe( () => this.updateFilter() );
  }

  setAsSelected( user: User ) {
    this.selectedUser = this.selectedUser?.id === user?.id ? undefined : user;
    if ( this.selectedUser ) {
      this.delMsg = 'willst du ' + this.selectedUser.firstname + ' wirklich löschen';
    }
  }

  async addRndUser() {
    const usr: User = {
      firstname: ['frank', 'paula', 'heiko', 'hanna'][Math.round( Math.random() * 3)],
      lastname: ['meyer', 'müller', 'maier', 'muster'][Math.round( Math.random() * 3)]
    };
    this.selectedUser = await this.$user.addUsr( usr );
  }

  del() {
    this.$user.del( this.selectedUser );
    this.selectedUser = undefined;
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
      this.$user.userList$.value.filter ( value => `${value.firstname}${value.lastname}`
        .indexOf ( this.filterStr ) !== - 1 );
  }

  update( firstname: string, lastname: string ) {
    this.$user.update ( { ...this.selectedUser, firstname, lastname} );
  }
}
