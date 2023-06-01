import { Component, OnInit } from '@angular/core';
import { Arbiter } from '../../models/Arbiter';
import { AdminArbiterService } from '../../services/admin-arbiter.service';

@Component({
  selector: 'app-arbiter',
  templateUrl: './arbiter.component.html',
  styleUrls: ['./arbiter.component.scss']
})
export class ArbiterComponent implements OnInit {

  arbiters: Arbiter[] = []

  constructor(public arbiterService: AdminArbiterService) { }

  ngOnInit(): void {
    this.getAllArbiters()
  }

  getAllArbiters() {
    this.arbiterService.getAdminArbiters().subscribe(
      listArbiters => this.arbiters = listArbiters
    )
  }

  removeArbiter(arbiter: Arbiter) {
    if (confirm("Naozaj chceš vymazať rozhodcu " + arbiter.firstName + " ?")) {
      this.arbiterService.deleteArbiter(arbiter.id).subscribe(
        () => this.getAllArbiters()
      )
    }
  }
}
