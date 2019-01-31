import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ErrorsModule } from './errors/errors.module';
import { StrainComponent } from './features/strain/strain.component';



@NgModule({
  declarations: [
    AppComponent,
    StrainComponent
  ],
  imports: [
    // servicos compartilhados
    SharedModule.forRoot(),
    RouterModule,
    BrowserModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
