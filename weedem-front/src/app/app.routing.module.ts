import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { StrainComponent } from './features/strain/strain.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/strains',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
  { path: 'strain', component: StrainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
