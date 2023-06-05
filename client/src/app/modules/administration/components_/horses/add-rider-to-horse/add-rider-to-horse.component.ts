import { Component, OnInit } from '@angular/core';
import { Horse } from '../../../models/Horse';

@Component({
  selector: 'app-add-rider-to-horse',
  templateUrl: './add-rider-to-horse.component.html',
  styleUrls: ['./add-rider-to-horse.component.scss']
})
export class AddRiderToHorseComponent implements OnInit {

  newHorse: Horse = new Horse()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
