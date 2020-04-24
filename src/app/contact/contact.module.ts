import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ContactComponent, FormComponent, MapComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactModule { }
