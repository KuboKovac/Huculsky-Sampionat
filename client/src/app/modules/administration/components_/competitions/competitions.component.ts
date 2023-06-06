import { Component, OnInit } from '@angular/core';
import { AdminCompetitionsService } from '../../services/admin-competitions.service';
import { Competition } from '../../models/Competition';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Result } from '../../models/Result';
import { AdminRidersService } from '../../services/admin-riders.service';
import { Rider } from '../../models/Rider';
import { Horse } from '../../models/Horse';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CompetitionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'date'];
  expandedElement: Competition | null = null
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  competitions: Competition[] = []


  horseToCompetiton: Horse[] = [new Horse(1, "Osvald", "svk557", "2008", true, 0, 0)]
  ridersToCompetition: Rider[] = [
    new Rider(0, "SVK557", "Janoslav", "Malý", "17.11.2000", "Junior", this.horseToCompetiton),
    new Rider(1, "SVK557", "Janko", "Malý", "17.11.2000", "Junior", this.horseToCompetiton),
    new Rider(2, "SVK558", "Janko", "Malý", "17.11.2000", "Junior", this.horseToCompetiton)
  ]

  constructor(private competitionService: AdminCompetitionsService, private rider: AdminRidersService) { }

  ngOnInit(): void {
    this.GetAllCompetions()
  }

  GetAllCompetions() {
    this.competitionService.getAllCompetitions().subscribe({
      next: value => this.competitions = value
    }
    )
  }

  //testujem commit
}