import { Component, OnInit } from '@angular/core';
import { AdminRidersService } from '../../../services/admin-riders.service';
import { AdminHorsesService } from '../../../services/admin-horses.service';
import { Rider } from '../../../models/Rider';
import { Horse } from '../../../models/Horse';
import { ridersIds } from '../../../models/ridersIds';

@Component({
  selector: 'app-remove-horse-to-rider',
  templateUrl: './remove-horse-to-rider.component.html',
  styleUrls: ['./remove-horse-to-rider.component.scss']
})
export class RemoveHorseToRiderComponent implements OnInit {

  constructor(private ridersService: AdminRidersService, private horseService: AdminHorsesService) { }

  riders: Rider[] = []
  horses: Horse[] = []

  selectedRider: Rider = new Rider()
  selectedHorse: Horse = new Horse()


  ngOnInit(): void {
    this.getRiders();
  }

  getRiders() {
    this.ridersService.getAllRiders().subscribe({
      next: ridersFromServer => this.riders = ridersFromServer
      ,
      error: err => console.log(err),
    })
  }


  onSelectRider(selected: Rider) {
    this.horses = selected.horses
  }

  onSelectHorse(selected: Horse) {
    this.selectedHorse = selected
  }

  onSubmit(): void {
    let ridersArray = new ridersIds()

    if (!ridersArray.ridersIds.find(value => value = this.selectedRider.id))
      ridersArray.addIds(this.selectedRider.id)
    this.horseService.removeRidersToHorse(this.selectedHorse.id, ridersArray).subscribe({
      next: response => console.log(response),
      error: err => console.log(err),
    })
  }
}
