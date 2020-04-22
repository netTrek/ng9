import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {

  @Input () user: User;
  @Output() selectUsr: EventEmitter<User> = new EventEmitter<User>();
  // [class.selected]="true" --- so haben wir es in der Eltern Komp gebunden
  @HostBinding('class.selected')
  @Input ()
  selected = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  @HostListener('click')
  triggerSelectEvent() {
    this.selectUsr.emit( this.user );
  }
}
