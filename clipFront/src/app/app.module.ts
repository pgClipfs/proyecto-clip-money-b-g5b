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
import { CarteraComponent } from './component/cartera/cartera.component';
import { VerMasComponent } from './component/ver-mas/ver-mas.component';
import { TransferirComponent } from './component/transferir/transferir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsupComponent,
    FooterComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroComponent,
    HomeComponent,
    CarteraComponent,
    VerMasComponent,
    TransferirComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
