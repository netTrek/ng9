import { Component, Inject } from '@angular/core';
import { USER_TOKEN, USERS_TOKEN } from './app.token';
import { AppLoadingStateService } from './app-loading-state.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    // $user: UserService,
    public $loadingState: AppLoadingStateService,
    $router: Router
  ) {
    // console.log ( usr , usrs );
    // timer( 1500 ).subscribe(
    //   () => $user.addUsr( {firstname: 'rxjs', lastname: 'rocks'} )
    // );
    $router.events
           .pipe(
             filter( e => e instanceof NavigationEnd )
           )
           .subscribe( console.log );
  }

  ichHabeFertig(  ) {
    console.log ( 'fertig ohne fehler' );
  }
}
