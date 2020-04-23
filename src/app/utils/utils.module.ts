import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger/danger.directive';
import { RoleDirective } from './role/role.directive';



@NgModule({
  declarations: [CountdownComponent, DangerDirective, RoleDirective],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerDirective, RoleDirective]
})
export class UtilsModule { }
