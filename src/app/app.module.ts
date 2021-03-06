import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { USER_TOKEN, USERS_TOKEN } from './app.token';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoadingInterceptorService } from './loading-interceptor.service';
import { ContactModule } from './contact/contact.module';
registerLocaleData( localeDE );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    DirectiveSamplesModule,
    PipeSamplesModule,
    HttpClientModule,
    ContactModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true  },
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true  },
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: USER_TOKEN, useValue: 'SABAN'},
    {provide: USERS_TOKEN, useValue: 'SABAN', multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
