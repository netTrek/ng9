import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user-service';
import { User } from '../user';

@Component ( {
  selector   : 'pl-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : ['./user-details.component.scss']
} )
export class UserDetailsComponent implements OnInit {
  userID: number;
  user: User;

  constructor(
    private $route: ActivatedRoute,
    private $user: UserService
  ) {
  }

  ngOnInit(): void {
    this.$route.paramMap
        .pipe (
          map ( pMap => + pMap.get ( 'id' ) ),
          tap( id => this.userID = id ),
          switchMap( id => this.$user.getUserByID ( id ) )
        )
        .subscribe (
          user => {
            this.user = user;
          }
        );
  }
}
