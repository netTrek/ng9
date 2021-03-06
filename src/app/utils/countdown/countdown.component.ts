import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'pl-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {


  percent                                      = 100;
  @Input( /* lieber nicht 'time'*/ )
  get duration(): number {
    return this._duration;
  }

  set duration( value: number ) {
    console.log ( 'duration defined as', value );
    this._duration = value;
  }

  @Output()
  complEvt: EventEmitter<void> = new EventEmitter<void>();
  private subscription: Subscription;
  // tslint:disable-next-line
  private _duration = 5000;
  constructor() { }

  ngOnInit(): void {
    // interval gibt 0, 1, 2, 3, 4, 5 zurück
    this.subscription = interval ( this.duration / 20 )
      .pipe (
        // map manipuliert den wert 95, 90, 85, 80
        map ( value => 100 - (value + 1) * 5 ),
        // 20 durchläufe und dann beenden
        take ( 20 )
      )
      .subscribe (
        // prozentwert der Eigenschaft auf aktuellen Stream wert
        next => this.percent = next,
        err => console.log ( err ),
        () => this.complEvt.emit()
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
