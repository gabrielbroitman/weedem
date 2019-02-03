import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedServicesModule } from './shared/shared-services.module';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { StrainModule } from './features/strain/strain.module';



@NgModule({
  imports: [
    BrowserModule,
    // servicos singleton vem daqui
    SharedServicesModule.forRoot(),
    ErrorsModule,
    StrainModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
