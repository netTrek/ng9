import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit(): void {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
