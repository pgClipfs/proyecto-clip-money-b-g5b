import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './component/registro/registro.component';
import { CarteraComponent } from './component/cartera/cartera.component';
import { VerMasComponent } from './component/ver-mas/ver-mas.component';
import { TransferirComponent } from './component/transferir/transferir.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: InicioSesionComponent},
  {path:'register',component: RegistroComponent},
  {path:'wallet',component: CarteraComponent},
  {path:'seemore',component: VerMasComponent},
  {path:'transfer',component: TransferirComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
