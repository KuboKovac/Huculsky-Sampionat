import { Component, OnInit } from '@angular/core';
import { Horse } from '../../models/Horse';
import { AdminHorsesService } from '../../services/admin-horses.service';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {

  horses: Horse[] = []

  constructor(private horsesService: AdminHorsesService) { }

  ngOnInit(): void {
    this.getAllHorses()
  }

  getAllHorses() {
    this.horsesService.getAllHorses().subscribe(
      horsesFromServer => this.horses = horsesFromServer,

    )
  }
}
