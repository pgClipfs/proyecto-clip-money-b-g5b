import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css']
})
export class ModificarDatosComponent implements OnInit {
  formGroup:FormGroup;



  constructor(
    private fb:FormBuilder,
    private usuario:UsuarioService,
  ) { }

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

  ngOnInit(): void {
    this.form();
  }

  onSubmit(){
      
    const body = this.formGroup.value;
    
    this.usuario.NewUser(body).subscribe(a => console.log(a))

  }


}
