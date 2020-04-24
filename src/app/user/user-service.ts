import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  get userList(): User[] {
    return this._userList;
  }

  // tslint:disable-next-line
  private _userList: User[] = [
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ];
  private nextInd           = 4;

  constructor() {
    console.log ( 'hello USer Service' );
  }

  addUsr( usr ): User {
    const lng = this.nextInd ++;
    usr.id = usr.id || lng;
    usr.firstname += lng;
    usr.lastname += lng;
    this.userList.push ( usr );
    return usr;
  }

  del( usr: User): User|undefined {
    const ind = this._userList.indexOf( usr );
    if ( ind > -1 ) {
      return this._userList.splice( ind, 1 )[0];
    }
    return;
  }
}
