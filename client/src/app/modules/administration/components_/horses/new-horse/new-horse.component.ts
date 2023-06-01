import { Component, OnInit } from '@angular/core';
import { Horse } from '../../../models/Horse';
import { AdminHorsesService } from '../../../services/admin-horses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-horse',
  templateUrl: './new-horse.component.html',
  styleUrls: ['./new-horse.component.scss']
})
export class NewHorseComponent implements OnInit {

  newHorse: Horse = new Horse()

  constructor(private horsesService: AdminHorsesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.horsesService.addHorse(this.newHorse).subscribe({
      next: () => this.router.navigateByUrl("/administration/riders/horses"),
      error: errr => console.log(errr),
    })
  }

}
