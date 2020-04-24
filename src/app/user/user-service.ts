import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  readonly userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
  ]);

  constructor( private $http: HttpClient) {
    this.init();
  }

  addUsr( usr ): Promise<User> {
    return this.$http.post<User>( environment.api , usr )
               .pipe(
                 tap( () => this.updateUserList() )
               )
               .toPromise();
    //    .subscribe( () => this.updateUserList() );
    // this.userList$.next( this.userList$.value );
  }

  update( usr ): Promise<User> {
    return this.$http.put<User>( environment.api + usr.id , usr )
               .pipe(
                 tap( () => this.updateUserList() )
               )
               .toPromise();
  }


  del( usr: User) {
    this.$http.delete( environment.api + usr.id ).subscribe(
      () => this.updateUserList(),
        err => console.error( err )
    );
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
