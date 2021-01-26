import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { from } from 'rxjs';
import { HomeComponent } from './component/home/home.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { RegistroComponent} from './component/registro/registro.component';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { UltMovimientosComponent } from './ult-movimientos/ult-movimientos.component';
import { ExtraerComponent } from './extraer/extraer.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { GiroaldescubiertoComponent } from './giroaldescubierto/giroaldescubierto.component'
import { TarjetaCuentaComponent } from './component/tarjeta-cuenta/tarjeta-cuenta.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: InicioSesionComponent},
  {path:'register',component: RegistroComponent},
  {path: 'ModificarDatos',component: ModificarDatosComponent},
  {path: 'ultimosMovimientos',component: UltMovimientosComponent},
  {path: 'extracciones',component: ExtraerComponent},
  {path: 'transferencias',component: TransferenciasComponent},
  {path: 'giros',component: GiroaldescubiertoComponent},
  {path: 'TarjetaCuenta',component: TarjetaCuentaComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
