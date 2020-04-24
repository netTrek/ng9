import { Component, Inject } from '@angular/core';
import { USER_TOKEN, USERS_TOKEN } from './app.token';
import { UserService } from './user/user-service';
import { timer } from 'rxjs';
import { AppLoadingStateService } from './app-loading-state.service';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2020';

  constructor(
    @Inject (USER_TOKEN) usr: string,
    @Inject (USERS_TOKEN) usrs: string[],
    $user: UserService,
    public $loadingState: AppLoadingStateService
  ) {
    // console.log ( usr , usrs );
    // timer( 1500 ).subscribe(
    //   () => $user.addUsr( {firstname: 'rxjs', lastname: 'rocks'} )
    // );
  }

  ichHabeFertig(  ) {
    console.log ( 'fertig ohne fehler' );
  }
}
