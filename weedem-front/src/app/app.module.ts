import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedServicesModule } from './shared/shared-services.module';
import { ErrorsModule } from './errors/errors.module';
import { StrainModule } from './features/strain/strain.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // servicos compartilhados
    SharedServicesModule.forRoot(),
    StrainModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
