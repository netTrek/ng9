import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppLoadingStateService } from './app-loading-state.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  constructor( private $loadingState: AppLoadingStateService) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.$loadingState.increment();
    return next.handle( req ).pipe( tap(
      () => {},
      () => this.$loadingState.decrement(),
      () => this.$loadingState.decrement()
    ));
  }
}
