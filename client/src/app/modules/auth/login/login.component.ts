import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../models/LoginModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LoginDTO = new LoginDTO('', '')
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onClick() {
    this._authService.login(this.login).subscribe({
      next: success => {
        if(success)
          this._router.navigateByUrl('/')
      }
    })
  }
}