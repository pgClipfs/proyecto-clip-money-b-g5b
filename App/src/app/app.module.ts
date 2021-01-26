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
import { UsuarioService } from './servicios/usuario.service';
import { PaginaPrincipalComponent } from './component/pagina-principal/pagina-principal.component';
import { TarjetaCuentaComponent } from './component/tarjeta-cuenta/tarjeta-cuenta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { UltMovimientosComponent } from './ult-movimientos/ult-movimientos.component';
import { ExtraerComponent } from './extraer/extraer.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { GiroaldescubiertoComponent } from './giroaldescubierto/giroaldescubierto.component';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';









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
    TarjetaCuentaComponent,
    ModificarDatosComponent,
    UltMovimientosComponent,
    ExtraerComponent,
    TransferenciasComponent,
    GiroaldescubiertoComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
MatDialogModule,
MatDividerModule,
 MatExpansionModule,
 MatFormFieldModule,
 MatGridListModule,
 MatIconModule,
 MatInputModule,
 MatListModule,
MatPaginatorModule ,
MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatRippleModule,
 MatSelectModule,
 MatSidenavModule,
 MatSlideToggleModule,
 MatSliderModule,
 MatSnackBarModule,
MatSortModule ,
 MatStepperModule,
 MatTableModule,
 MatTabsModule,
 MatToolbarModule ,
 MatTooltipModule,
 MatTreeModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
