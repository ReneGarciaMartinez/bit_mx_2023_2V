import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CodigoComponent } from './pages/codigo/codigo.component';
import { RestaurarComponent } from './pages/restaurar/restaurar.component';
import { PasswordComponent } from './pages/password/password.component';
import { HomeComponent } from './client/home/home.component';
import { PerfilComponent } from './client/perfil/perfil.component';
import { PlanesComponent } from './client/planes/planes.component';
import { QrComponent } from './client/qr/qr.component';
import { ProgramaComponent } from './client/programa/programa.component';
import { TalleresComponent } from './client/talleres/talleres.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarClientComponent } from './shared/navbar-client/navbar-client.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CompletarComponent } from './client/completar/completar.component';
import { MetodoComponent } from './client/metodo/metodo.component';
import { EleccionComponent } from './client/eleccion/eleccion.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegistroComponent,
    CodigoComponent,
    RestaurarComponent,
    PasswordComponent,
    HomeComponent,
    PerfilComponent,
    PlanesComponent,
    QrComponent,
    ProgramaComponent,
    TalleresComponent,
    NavbarComponent,
    NavbarClientComponent,
    FooterComponent,
    CompletarComponent,
    MetodoComponent,
    EleccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
