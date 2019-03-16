import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrainComponent } from './strain.component';

const strainRoutes: Routes = [
  {
    path: 'strain',
    component: StrainComponent,
    children: [
      { path: '', component: StrainComponent },
      { path: ':id', component: StrainComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(strainRoutes)],
  exports: [RouterModule]
})
export class StrainRoutingModule {}
