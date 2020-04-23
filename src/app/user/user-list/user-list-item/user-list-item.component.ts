import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit, OnChanges {

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

  // <div (click)="triggerSelectEvent( $event )">
  @HostListener('click', ['$event'] )
  triggerSelectEvent( event: MouseEvent ) {
    console.log ( event );
    this.selectUsr.emit( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty('selected') ) {
      const selectedState = changes.selected as SimpleChange;
      if ( !selectedState.firstChange ) {
        console.log ( this.user.firstname, ' selection changed to ', selectedState.currentValue );
      }
    }
  }
}
