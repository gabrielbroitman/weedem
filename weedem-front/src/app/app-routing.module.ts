import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { StrainComponent } from './features/strain/strain.component';

const appRoutes: Routes = [
  { path: 'strain', loadChildren: 'app/features/strain/strain.module#StrainModule' },
  { path: '', component: StrainComponent },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'detail/:id', component: StrainDetailComponent },
  // { path: 'heroes', component: StrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
