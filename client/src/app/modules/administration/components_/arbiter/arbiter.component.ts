import {Component, OnInit} from '@angular/core';
import {Arbiter} from '../../models/Arbiter';
import {AdminArbiterService} from '../../services/admin-arbiter.service';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-arbiter',
    templateUrl: './arbiter.component.html',
    styleUrls: ['./arbiter.component.scss']
})
export class ArbiterComponent implements OnInit {

    arbiters: Arbiter[] = []

    constructor(public arbiterService: AdminArbiterService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllArbiters()
    }

    getAllArbiters() {
        this.arbiterService.getAdminArbiters().subscribe(
            listArbiters => this.arbiters = listArbiters
        )
    }

    removeArbiter(arbiter: Arbiter) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: {
                header: 'Odstránenie rozhodcu',
                text: `Naozaj chcete odstrániť rozhodcu ${arbiter.firstName} ${arbiter.lastName}?`
            }
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.arbiterService.deleteArbiter(arbiter.id).subscribe(
                    () => this.getAllArbiters()
                )
            }
        })

    }
}
