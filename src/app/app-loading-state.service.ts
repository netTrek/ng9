import { Injectable } from '@angular/core';

@Injectable ( {
  providedIn: 'root'
} )
export class AppLoadingStateService {

  get counts(): number {
    return this._counts;
  }
  // tslint:disable-next-line
  private _counts = 0;

  constructor() {
  }

  increment() {
    this._counts ++;
  }

  decrement() {
    this._counts --;
  }
}
