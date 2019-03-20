import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrainComponent } from './strain.component';
import { StrainRoutingModule } from './strain-routing.module';
import { SharedServicesModule } from 'src/app/shared/shared-services.module';

@NgModule({
  imports: [
    CommonModule,
    StrainRoutingModule,
    SharedServicesModule
  ],
  declarations: [ StrainComponent]
})
export class StrainModule { }
