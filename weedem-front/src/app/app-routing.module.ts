import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { StrainComponent } from './features/strain/strain.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth-guard/auth.guard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'strain', loadChildren: 'src/app/features/strain/strain.module#StrainModule' },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{
    path: 'login',
    component: LoginComponent
},
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
