import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: InicioSesionComponent},
  {path:'register',component: RegistroComponent},
  {path:'welcome',component: WelcomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
