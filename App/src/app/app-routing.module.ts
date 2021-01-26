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
import { AuthGuard } from './helper/auth.guard';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: InicioSesionComponent},
  {path:'register',component: RegistroComponent},
  {path: 'ModificarDatos',component: ModificarDatosComponent,canActivate:[AuthGuard]},
  {path: 'ultimosMovimientos',component: UltMovimientosComponent,canActivate:[AuthGuard]},
  {path: 'extracciones',component: ExtraerComponent,canActivate:[AuthGuard]},
  {path: 'transferencias',component: TransferenciasComponent,canActivate:[AuthGuard]},
  {path: 'giros',component: GiroaldescubiertoComponent,canActivate:[AuthGuard]},
  {path: 'TarjetaCuenta',component: TarjetaCuentaComponent,canActivate:[AuthGuard]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
