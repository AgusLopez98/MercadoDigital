import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';
import { Error404Component } from './shared/components/error404/error404.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    loadChildren: ()=> import('./modules/landing/landing.module').then(m => m.LandingModule) 
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
