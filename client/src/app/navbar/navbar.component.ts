import { Component, OnInit } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = true

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {

    //this if statement prevents resetting logged in status after refresh
    if(this._authService.token)
      this.loggedIn = true
    else
      this.loggedIn = false

    // listen to login status observable for navbar buttons (to decide to use log in or log out)  
    this._authService.loginStatusChange().subscribe(
      status => this.loggedIn = status
    )
  }

  public onLogout(){
    this._authService.logout()
  }
}
