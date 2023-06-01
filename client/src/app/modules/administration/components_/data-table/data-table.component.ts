import { Component, OnInit } from '@angular/core';
import { Rider } from "../../models/Rider";
import { AdminRidersService } from '../../services/admin-riders.service';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    public riders: Rider[] = [
        //new Rider("SVK1455", "Eva", "Turská", "14.2.1998", "Dospelý") <--- Template
    ]

    constructor(private ridersService: AdminRidersService) {
    }

    ngOnInit(): void {
        this.getAllRiders()

    }

    getAllRiders() {
        this.ridersService.getAllRiders().subscribe({
            next: ridersFromServer => this.riders = ridersFromServer,
            complete: () => console.log(this.riders)
        }
        )
    }

    removeRider(rider: Rider) {
        if (confirm("Naozaj chceš zmazať jazdca " + rider.firstName + " " + rider.lastName + " ?")) {
            this.ridersService.deleteRider(rider.id).subscribe(
                () => this.getAllRiders()
            )
        }

    }

}
