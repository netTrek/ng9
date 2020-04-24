import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  readonly userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { id: 1, firstname: 'saban', lastname: 'ünlü' },
    { id: 2, firstname: 'peter', lastname: 'müller' },
    { id: 3, firstname: 'paula', lastname: 'meyer' }
  ]);
  private nextInd           = 4;

  constructor() {
  }

  addUsr( usr ): User {
    const lng = this.nextInd ++;
    usr.id = usr.id || lng;
    usr.firstname += lng;
    usr.lastname += lng;
    this.userList$.value.push( usr );
    this.userList$.next( this.userList$.value );
    return usr;
  }

  del( usr: User): User|undefined {
    const ind = this.userList$.value.indexOf( usr );
    if ( ind > -1 ) {
      const deletedUsr = this.userList$.value.splice( ind, 1 )[0];
      this.userList$.next( this.userList$.value );
      return deletedUsr;
    }
    return;
  }
}
