import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from '../../servicios/usuario.service';
import {AuthInterceptorService} from '../../servicios/auth-interceptor.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formGroup: FormGroup;
  returnUrl: string;
  error = '';
  cliente:string;
  constructor(
    private fb:FormBuilder,
    private usuario:UsuarioService,
    private authenticationService: AuthInterceptorService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }
  form(){
    this.formGroup=this.fb.group({
      username:[""],
      password:[""],
    
     });
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/TarjetaCuenta';
    this.form();
  }

  onSubmit(){
    const login = this.formGroup.value;
    this.cliente=login.username.value;
   
    //console.log(login.username.value)
    this.usuario.postUsuario(login)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
        }
      );
    
  }
}
