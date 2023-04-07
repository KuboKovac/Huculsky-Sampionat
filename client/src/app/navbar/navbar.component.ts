import { Component, OnInit } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = true
  public userRole: string = ''
  public username: string = ''

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {

    //  this if statement prevents resetting logged in status after refresh
    if(this._authService.token){
      this.loggedIn = true
      this.checkTokenOnInit(this._authService.token)
    }
          
    else
      this.loggedIn = false
  
    // listen to login status observable for navbar buttons (to decide to use log in or log out)  
    this._authService.loginStatusChange().subscribe(
      status => {
        this.loggedIn = status
        console.log('Logged in: ' + status)
      }
    )
    this._authService.roleChange().subscribe(
      role => {
        this.userRole = role
        console.log(role)
      }
    )
    this._authService.usernameChange().subscribe(
      username => {
        this.username = username
        console.log(username)
      }
    )
  }

  public onLogout(){
    this._authService.logout()
  }


  // checks token role on component init to prevent bugs when reloading page 
  private checkTokenOnInit(token: string): void{
    let jwtParser = new JwtHelperService();
    const decodedToken = jwtParser.decodeToken(token)
    this.userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    this.username = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
  }
}
