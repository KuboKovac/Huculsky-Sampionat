import { Component, OnInit } from '@angular/core';
import { Rider } from '../../../models/Rider';
import { Horse } from '../../../models/Horse';
import { AdminRidersService } from '../../../services/admin-riders.service';
import { AdminHorsesService } from '../../../services/admin-horses.service';
import { ridersIds } from '../../../models/ridersIds';

@Component({
  selector: 'app-add-horse-to-rider',
  templateUrl: './add-horse-to-rider.component.html',
  styleUrls: ['./add-horse-to-rider.component.scss']
})
export class AddHorseToRiderComponent implements OnInit {

  riders: Rider[] = []
  horses: Horse[] = []

  selectedRider: Rider = new Rider()
  selectedHorse: Horse = new Horse()





  constructor(private ridersService: AdminRidersService, private horseService: AdminHorsesService) { }

  ngOnInit(): void {
    this.getHorsesAndRiders()
  }

  getHorsesAndRiders() {
    this.ridersService.getAllRiders().subscribe({
      next: ridersFromServer => this.riders = ridersFromServer,
      error: err => console.log(err),
    })
    this.horseService.getAllHorses().subscribe({
      next: horsesFromServer => this.horses = horsesFromServer,
      error: err => console.log(err),
    })
  }

  onSubmit() {
    let ridersArray = new ridersIds()

    if (!ridersArray.ridersIds.find(value => value = this.selectedRider.id))
      ridersArray.addIds(this.selectedRider.id)

    this.horseService.addRidersToHorse(this.selectedHorse.id, ridersArray).subscribe({
      next: response => console.log(response),
      error: err => console.log(err),
    })
  }



}

