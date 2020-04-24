import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  readonly userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
  ]);
  private nextInd           = 4;

  constructor( private $http: HttpClient) {
    this.init();
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

  private init() {
    this.updateUserList();
  }

  private updateUserList() {
    this.$http.get<User[]>( environment.api )
         .subscribe(
           users => this.userList$.next( users ),       // neu daten kommen rein
           err => console.error( err ),                 // fehler
           () => console.log ( 'daten wurden geladen' ) // keine weiteren daten zu erwarten
         );
  }
}
