import {Component, OnInit} from '@angular/core';
import {Rider} from "../../models/Rider";
import {AdminRidersService} from '../../services/admin-riders.service';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    public riders: Rider[] = [
        //new Rider("SVK1455", "Eva", "Turská", "14.2.1998", "Dospelý") <--- Template
    ]

    constructor(private ridersService: AdminRidersService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllRiders()

    }

    getAllRiders() {
        this.ridersService.getAllRiders().subscribe({
                next: ridersFromServer => this.riders = ridersFromServer,
            }
        )
    }

    removeRider(rider: Rider) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: {
                header: 'Odstránenie jazdca',
                text: `Naozaj chcete odstrániť jazdca ${rider.firstName} ${rider.lastName}?`
            }
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.ridersService.deleteRider(rider.id).subscribe(
                    () => this.getAllRiders()
                )
            }
        })

    }

}
