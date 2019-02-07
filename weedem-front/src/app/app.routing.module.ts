import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/strains',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'detail/:id', component: StrainDetailComponent },
 // { path: 'heroes', component: StrainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
