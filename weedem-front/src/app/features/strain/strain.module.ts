import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServicesModule } from 'src/app/shared/shared-services.module';
import { StrainComponent } from './strain.component';

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule
  ],
  declarations: [ StrainComponent]
})
export class StrainModule { }
