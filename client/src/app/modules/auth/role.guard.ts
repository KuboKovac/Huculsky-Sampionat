import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  jwtParser = new JwtHelperService()

  constructor(

  ) {}

  canActivate() {
    return true
  }
}