
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { MessageService } from 'src/shared/message.service';


/*
        This guard allow only logged in user with role Admin or Arbiter                
              - additional roles can be added into switch at bottom
*/

@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {
  constructor(
    private router: Router,
    private msgService: MessageService
  ) {}
  
  jwtParser = new JwtHelperService()
  
  canActivate() {

    let token = localStorage.getItem('Jwt') || ''

    if (!token) {
      console.warn('You are not allowed to continue!')
      this.router.navigateByUrl('/home')
      this.msgService.message("Nemáte oprávnenie!", 5000)
      return false
    }
    else {
      const decodedToken = this.jwtParser.decodeToken(token)
      const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]


      //   No 'break;' code because return will break function 
      switch (role) {
        case 'Admin': {
          return true
        }
        case 'Arbiter': {
          return true
        }
        case 'User': {
          console.warn('You are not allowed to continue!')
          this.router.navigateByUrl('/home')
          this.msgService.message("Nemáte oprávnenie!", 5000)
          return false
        }
        default: {
          console.warn('You are not allowed to continue!')
          this.router.navigateByUrl('/home')
          this.msgService.message("Nemáte oprávnenie!", 5000)
          return false
        }
      }
    }
  }
}