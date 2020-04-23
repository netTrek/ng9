import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger/danger.directive';
import { RoleDirective } from './role/role.directive';
import { ConvertPipe } from './convert/convert.pipe';



@NgModule({
  declarations: [CountdownComponent, DangerDirective, RoleDirective, ConvertPipe],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerDirective, RoleDirective, ConvertPipe]
})
export class UtilsModule { }
