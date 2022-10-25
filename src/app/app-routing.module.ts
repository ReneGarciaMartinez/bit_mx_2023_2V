import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodigoComponent } from './components/codigo/codigo.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestaurarComponent } from './components/restaurar/restaurar.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'restaurar',
    component: RestaurarComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'codigo',
    component: CodigoComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
