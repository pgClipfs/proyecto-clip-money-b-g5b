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
        Nick:[""],
        Pass:[""],
        Email:["",[Validators.email]],
        Nombre:[""],
        Apellido:[""],
        Dni:[""]
       });
    }
 
    ngOnInit(): void{
      this.form();

    }
    
    onSubmit(){
      
      const body = this.formGroup.value;
      
      this.usuario.PostNewUsuario(body).subscribe(a => console.log(a))

    }

}
