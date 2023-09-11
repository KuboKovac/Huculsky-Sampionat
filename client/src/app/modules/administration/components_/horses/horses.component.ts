import { Component, OnInit } from '@angular/core';
import { Horse } from '../../models/Horse';
import { AdminHorsesService } from '../../services/admin-horses.service';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {

  horses: Horse[] = []

  constructor(private horsesService: AdminHorsesService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllHorses()
  }

  getAllHorses() {
    this.horsesService.getAllHorses().subscribe(
      horsesFromServer => this.horses = horsesFromServer,

    )
  }

  deleteHorse(horse: Horse) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: 'Odstránenie koňa',
        text: `Naozaj chcete odstrániť koňa ${horse.name}? Zmena bude nevratná!`
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.horsesService.deleteHorse(horse.id).subscribe(
            () => this.getAllHorses()
        )
      }
    })
  }
}
