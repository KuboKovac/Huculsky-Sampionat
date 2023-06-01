import { Component, OnInit } from '@angular/core';
import { Arbiter } from '../../../models/Arbiter';
import { AdminArbiterService } from '../../../services/admin-arbiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-arbiter',
  templateUrl: './new-arbiter.component.html',
  styleUrls: ['./new-arbiter.component.scss']
})
export class NewArbiterComponent implements OnInit {

  newArbiter: Arbiter = new Arbiter(0, '', '');

  constructor(private arbitersService: AdminArbiterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.arbitersService.addArbiter(this.newArbiter).subscribe({
      next: () => this.router.navigateByUrl("/administration/riders/arbiter"),
      error: errr => console.log(errr),
    })
  }
}
