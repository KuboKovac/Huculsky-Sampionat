import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginDTO } from './models/LoginModel';
import { Observable, catchError, map } from 'rxjs';
import { TokenDTO } from './models/TokenModel';
import { errorHandler } from 'src/shared/functions';
import { MessageService } from 'src/shared/message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl
  public role: string = ''
  public username: string = ''
  private jwtParser = new JwtHelperService();


  constructor(
    private _http: HttpClient,
    private _messageService: MessageService,
    private _router: Router
  ) { }


  set token(value: string | null) {
    if (value) {
      localStorage.setItem('Jwt', value)
    } else {
      localStorage.removeItem('Jwt')
    }
  }

  get token(): string | null {
    return localStorage.getItem('Jwt')
  }

  public login(login: LoginDTO): Observable<TokenDTO> {
    return this._http.post<TokenDTO>(this.url + 'Auth/Login', login).pipe(
      map(response => {
        this.token = response.jwt

        //  Jwt decoding
        let DecodedToken = this.jwtParser.decodeToken(this.token)

        //  Takes username and role from JwT
        this.username = DecodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
        this.role = DecodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role']

        this._messageService.message('Prihlásenie prebehlo úspešne', 2000)

        return new TokenDTO(this.token)
      }
      ), catchError(error => errorHandler(error, 5000, this._messageService))
    )
  }

  public logout() {
    this.token = ''
    this.role = ''
    this.username = ''
    this._messageService.message('Odhlásenie prebehlo úspešne', 2000)
    this._router.navigateByUrl('/')
  }

  public register() {

  }

}