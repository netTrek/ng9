import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserActivateGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return timer( 1000 ).pipe( mapTo( true ));
  }

}
