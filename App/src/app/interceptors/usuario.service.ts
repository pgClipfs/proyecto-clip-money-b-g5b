import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpuser:HttpClient,
  ) { }
  base='https://localhost:44397/api/login/echoping'

  getUsuarioMet() :Observable<any>{
    
    return this.httpuser.get(this.base);
   
  }

}
