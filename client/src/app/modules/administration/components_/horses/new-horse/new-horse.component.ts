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

  allHorses: Horse[] = []
  HorsesMale: Horse[] = []
  HorsesFemale: Horse[] = []


  constructor(private horsesService: AdminHorsesService, private router: Router) { }

  ngOnInit(): void {
    this.horsesService.getAllHorses().subscribe(
      {
        next: response => this.allHorses = response,
        complete: () => {
          this.allHorses.forEach(horse => {
            if (horse.male == true) {
              this.HorsesMale.push(horse)
            } else {
              this.HorsesFemale.push(horse)
            }
          }
          )
        }
      }
    )
  }

  onSelect() {
    console.log(this.newHorse)
  }

  onSubmit() {
    this.horsesService.addHorse(this.newHorse).subscribe({
      next: () => this.router.navigateByUrl("/administration/riders/horses"),
      error: errr => console.log(errr),
    })
  }

}
