import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { StrainModule } from './features/strain/strain.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedServicesModule } from './shared/shared-services.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/auth-guard/jwt.interceptor';
import { ErrorInterceptor } from './core/errors-interceptor/error.intercepetor';
import { FakeBackendInterceptor } from './core/helpers/jwt-provider';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // servicos compartilhados
    SharedServicesModule.forRoot(),
    StrainModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FakeBackendInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
