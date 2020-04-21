import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  // template: `
  //   <h1 (click)="chgName()">{{name}}</h1>
  // `,
  styleUrls: ['./user.component.scss'] // ,
  // changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.ShadowDom
  // styles: [`
  //          h1 { color: red}
  //          `]
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit(): void {
    // window.setTimeout( () => this.name = 'test', 100 );
    // window.setTimeout( () => console.log( this.name ), 200 );
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
