import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsupComponent } from './component/navsup/navsup.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './component/registro/registro.component';
import { HomeComponent } from './component/home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { UsuarioService } from './servicios/usuario.service';
import { PaginaPrincipalComponent } from './component/pagina-principal/pagina-principal.component';
import { TarjetaCuentaComponent } from './component/tarjeta-cuenta/tarjeta-cuenta.component';
@NgModule({
  declarations: [
    AppComponent,
    NavsupComponent,
    FooterComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroComponent,
    HomeComponent,
    PaginaPrincipalComponent,
    TarjetaCuentaComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
