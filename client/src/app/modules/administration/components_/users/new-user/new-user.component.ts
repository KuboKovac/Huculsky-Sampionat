import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { AdminUserService } from '../../../services/admin-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUser: User = new User()
  selectedRole: string = ""
  roles: string[] = ["Admin", "User", "Adbiter"]

  constructor(private userService: AdminUserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.registerUSer(this.newUser).subscribe({
      next: () => this.router.navigateByUrl("/administration/riders/table"),
      error: errr => console.log(errr),
    }
    )
  }

  selectRole(role: string) {
    console.log(role)
    this.newUser.role = role
  }
}
