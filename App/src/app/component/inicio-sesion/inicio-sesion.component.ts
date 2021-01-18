import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from '../../servicios/usuario.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formGroup: FormGroup;
  
  constructor(
    private fb:FormBuilder,
    private usuario:UsuarioService,
  ) { }
  form(){
    this.formGroup=this.fb.group({
      usuario:[""],
      contraseña:[""],
    
     });
  }
  ngOnInit(): void {
    this.form();
  }

  onSubmit(){
    const login =JSON.stringify(this.formGroup.value);
    console.log(login);
    console.log(this.formGroup)
    this.usuario.postUsuario(login).subscribe(Body => console.log(Body));

    
  }
}
