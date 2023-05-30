import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginDTO } from './models/LoginModel';
import { Observable, Subject, catchError, map } from 'rxjs';
import { TokenDTO } from './models/TokenModel';
import { errorHandler } from 'src/shared/functions';
import { MessageService } from 'src/shared/message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl
  public role = new Subject<string>()
  public username = new Subject<string>()
  public loggedInSubject = new Subject<boolean>()
  private jwtParser = new JwtHelperService();


  constructor(
    private _http: HttpClient,
    private _messageService: MessageService,
    private _router: Router
  ) { }



  // Observable functions for account informations change

  public roleChange(): Observable<string> {
    return this.role.asObservable()
  }

  public loginStatusChange(): Observable<boolean> {
    return this.loggedInSubject.asObservable()
  }

  public usernameChange(): Observable<string> {
    return this.username.asObservable()
  }



  // get and set for Jwt from LocalStorage
  set token(value: string | null) {
    if (value) {
      localStorage.setItem('Jwt', value)
    } else {
      localStorage.removeItem('Jwt')
    }
  }


  //Rolo je kokot

  get token(): string | null {
    return localStorage.getItem('Jwt')
  }



  public login(login: LoginDTO): Observable<TokenDTO> {
    return this._http.post<TokenDTO>(this.url + 'Auth/Login', login).pipe(
      map(response => {
        this.token = response.jwt
        this.loggedInSubject.next(true)
        //  Jwt decoding
        let decodedToken = this.jwtParser.decodeToken(this.token)

        //  Takes username and role from JwT
        this.username.next(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'])
        this.role.next(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])

        localStorage.setItem("username", decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'])

        this._messageService.message('Prihlásenie prebehlo úspešne', 2000)

        return new TokenDTO(this.token)
      }
      ), catchError(error => errorHandler(error, 5000, this._messageService))
    )
  }

  public logout() {
    this.loggedInSubject.next(false)
    this.token = ''
    this.role.next('')
    this.username.next('')
    this._messageService.message('Odhlásenie prebehlo úspešne', 2000)
    this._router.navigateByUrl('/')
    localStorage.removeItem("username")
  }

  public register() {

  }

}