import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../models/user';
//import {InicioSesionComponent} from '../component/inicio-sesion/inicio-sesion.component'
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

  PostNewUsuario(body:any):Observable<any>{
    return this.httpuser.post(this.base2,body);
  }
  
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
