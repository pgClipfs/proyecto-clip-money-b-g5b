import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../models/user';
import {InicioSesionComponent} from '../component/inicio-sesion/inicio-sesion.component'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(
    private httpuser:HttpClient,
    //private InicioSesionComponent:InicioSesionComponent,
    
  ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  base='https://localhost:44397/api/login/echoping'

  base1='https://localhost:44397/api/login/authenticate'

  base2='https://localhost:44397/api/register/newUser'

  base3='https://localhost:44397/api/register/getUser'

  base4 ='https://localhost:44397/api/register/getId'

  base5 ='https://localhost:44397/api/register/modifyUser' 

  //Rutas Cuenta

  base6 ='https://localhost:44397/api/account/getBalance' 

  base7 ='https://localhost:44397/api/account/idBalance' 

  base8 ='https://localhost:44397/api/account/modifyBalance' 

  //Rutas Operaciones
  base9 ='https://localhost:44397/api/operation/modifyBalance'

  base10 ='https://localhost:44397/api/operation/getOperationList'

  getUsuarioMet() :Observable<any>{
    
    return this.httpuser.get(this.base);
   
  }

  postUsuario(login: any) :Observable <any>{
    
    return this.httpuser.post<any>(`https://localhost:44397/api/login/authenticate`, login)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }));
  
  }
//Hay que pasarle un objeto usuario
  PostNewUsuario(body:any):Observable<any>{
    return this.httpuser.post(this.base2,body);
  }

  //Pasarle datos del , devuelve un objeto usuario
  getUsuario(userdata: any):Observable <any>{
    return this.httpuser.post(this.base3,userdata);
  }

//Pasarle datos del login, hay que guardar el id que devuelve 
  getIdUsuario(userid:any):Observable<any>{
    return this.httpuser.get(this.base4,userid);
  }

  //Pasarle el usuario
  PostUsuarioModificado(userModify:any):Observable<any>{
    return this.httpuser.post(this.base5,userModify);
  }

  //Peticiones Cuenta
  //Pasarle id usuario por url
  getSaldo(saldo: any):Observable <any>{
    return this.httpuser.post(this.base6,saldo);
  }
//Pasarle id usuario por url, guardar el id cuenta
  getIdCuenta(idCuenta: any):Observable <any>{
    return this.httpuser.post(this.base7,idCuenta);
  }

  //Pasarle un objeto operacion, hay que agregarle el id cuenta dentro del objeto
  PostModificarSaldo(cuentaModify:any):Observable<any>{
    return this.httpuser.post(this.base8,cuentaModify);
  }

  //Peticiones operaciones
  //Pasarle un objeto operacion con el id de cuenta guardado
  PostNuevaOperacion(newOperacion:any):Observable<any>{
    return this.httpuser.post(this.base9,newOperacion);
  }

  //Pasarle el id de usuario 
  getListaOperaciones(ultimoMovimientos: any):Observable <any>{
    return this.httpuser.post(this.base10,ultimoMovimientos);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
