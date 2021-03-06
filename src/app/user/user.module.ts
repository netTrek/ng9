import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { USER_TOKEN, USERS_TOKEN } from '../app.token';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

@NgModule( {
  declarations: [UserComponent, UserListComponent, UserListItemComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  providers: [
    {provide: USER_TOKEN, useValue: 'PETER'},
    {provide: USERS_TOKEN, useValue: 'PETER', multi: true}
  ],
  exports: [UserComponent,
            UserListComponent,
            UserListItemComponent
  ]
})
export class UserModule { }
