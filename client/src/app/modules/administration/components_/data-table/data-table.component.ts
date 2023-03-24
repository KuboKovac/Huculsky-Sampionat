import {Component, OnInit} from '@angular/core';
import {Rider} from "../../models/Rider";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    public riders: Rider[] = [
        new Rider("SVK1455", "Eva", "Turská", "14.2.1998", "Dospelý"),
        new Rider("SVK4550", "Filip", "Oravec", "1.2.2000", "Dospelý"),
        new Rider("SVK0055", "Richard", "Lukačko", "12.4.1999", "Dospelý"),
        new Rider("SVK0455", "John", "Doe", "17.7.2000", "Dospelý"),
        new Rider("SVK4546", "Natália", "Morozova", "22.12.2001", "Dospelý"),
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
