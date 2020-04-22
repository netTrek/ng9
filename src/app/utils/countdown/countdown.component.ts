import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'pl-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  percent                                      = 100;
  duration                                     = 5000;
  private subscription: Subscription;
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
        next => this.percent = next
      );
  }

}
