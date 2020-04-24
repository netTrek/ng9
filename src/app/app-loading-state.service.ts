import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class AppLoadingStateService {

  // tslint:disable-next-line
  private _counts = 0;

  get counts(): number {
    return this._counts;
  }

  constructor() {
  }

  increment() {
    this._counts ++;
  }

  decrement() {
    timer ( 10 )
      .subscribe (
        () => this._counts --
      );

  }
}
