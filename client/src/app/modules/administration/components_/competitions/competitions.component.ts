import {Component, OnInit} from '@angular/core';
import {AdminCompetitionsService} from '../../services/admin-competitions.service';
import {Competition} from '../../models/Competition';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import {RatingResultsComponent} from './rating-results/rating-results.component';
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-competitions',
    templateUrl: './competitions.component.html',
    styleUrls: ['./competitions.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class CompetitionsComponent implements OnInit {


    competitions: Competition[] = []
    panelOpenState = true

    constructor(
        private competitionService: AdminCompetitionsService,
        private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.GetAllCompetions()
    }

    private GetAllCompetions() {
        this.competitionService.getAllCompetitions().subscribe({
                next: value => {
                    this.competitions = value
                }

            }
        )
    }

    public lockCompetition(id: number) {
        const competitionLockDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: {
                header: 'Uzatvorenie pretekov',
                text: 'Naozaj chcete uzatvoriť preteky ? Uzatvorenie pretekov je pernamentné a nédá sa zmeniť! ' +
                      'Všetky údaje budú uložené v súčasnom stave!'
            }
        })
        competitionLockDialog.afterClosed().subscribe(result => {
            if (result) {
                this.competitionService.lockCompetiton(id).subscribe(() => this.GetAllCompetions())
            }
        })
    }


    public openDialogOnClick(competitionId: number,
                             riderId: number,
                             horseId: number | undefined, isLocked: boolean | undefined) {
        this.dialog.open(RatingResultsComponent, {
            data: {
                competitionId: competitionId,
                riderId: riderId,
                horseId: horseId,
                isLocked: isLocked,
            }
        });
    }

}