import { Component, OnInit } from '@angular/core';
import {AuthInterceptorService} from '../../servicios/auth-interceptor.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService} from '../../servicios/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    formGroup:FormGroup;
    
    constructor(
    private fb:FormBuilder,
    private usuario:UsuarioService,
    ) {}
    
    form(){
      this.formGroup=this.fb.group({
        usuario:[""],
        contraseña:[""],
        contraseña2:[""],
        email:["",[Validators.email]]
       });
    }
 
    ngOnInit(): void{
      this.form();

    }
    
    onSubmit(){
      
      const body = JSON.stringify(this.formGroup.value);
      
      this.usuario.getUsuarioMet().subscribe(a => console.log(a))

    }

}
