import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserActivateGuard } from './user/user-activate.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailsComponent,
    canActivate: [UserActivateGuard]
  },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'form', component: FormComponent }
    ] },
  { path: 'dash',
    loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
