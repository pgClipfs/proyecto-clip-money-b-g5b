import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: InicioSesionComponent},
  {path:'register',component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
