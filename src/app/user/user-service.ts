import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {

  num = 123;

  constructor() {
    console.log ( 'hello USer Service' );
  }
}
