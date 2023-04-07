import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { MessageService } from 'src/shared/message.service';

/*
      This guard allow only logged in user with role Admin
*/

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private msgService: MessageService
    ) {}

    jwtParser = new JwtHelperService()
    
    canActivate() {
        const token = localStorage.getItem('Jwt') || ''
        if (!token) {
            console.warn('You are not allowed to continue!')
            this.router.navigateByUrl('/home')
            this.msgService.message("Nemáte oprávnenie!", 5000)
            return false
        }
        else {
            let decodedToken = this.jwtParser.decodeToken(token)

            if (decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Admin')
                return true
            else {
                console.warn('You are not allowed to continue!')
                this.router.navigateByUrl('/home')
                this.msgService.message("Nemáte oprávnenie!", 5000)
                return false
            }
        }
    }
}