import { Component, OnInit } from '@angular/core';
import { AdminCompetitionsService } from '../../services/admin-competitions.service';
import { Competition } from '../../models/Competition';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  constructor(private competitionService: AdminCompetitionsService) { }

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