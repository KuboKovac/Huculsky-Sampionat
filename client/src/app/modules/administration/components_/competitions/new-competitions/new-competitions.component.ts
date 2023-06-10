import { Component, OnInit } from '@angular/core';
import { Competition } from '../../../models/Competition';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/shared/message.service';
import { AdminArbiterService } from '../../../services/admin-arbiter.service';
import { Arbiter } from '../../../models/Arbiter';
import { Rider } from '../../../models/Rider';
import { AdminRidersService } from '../../../services/admin-riders.service';
import { AdminCompetitionsService } from '../../../services/admin-competitions.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-new-competitions',
  templateUrl: './new-competitions.component.html',
  styleUrls: ['./new-competitions.component.scss']
})
export class NewCompetitionsComponent implements OnInit {

  competition: Competition = new Competition(0, "", "", "")
  arbiters: Arbiter[] = []
  riders: Rider[] = []
  selectedArbiters: Arbiter[] = []
  selectedRiders: Rider[] = []


  constructor(
    private msgService: MessageService,
    private adminArbiterService: AdminArbiterService,
    private adminRiderService: AdminRidersService,
    private adminCompetitionsService: AdminCompetitionsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllArbiters()
    this.getAllRiders()
  }


  public createNewCompetition() {
    
    this.competition.ridersIds = []
    this.competition.arbitersIds = []

    this.selectedRiders.forEach(r => this.competition.ridersIds?.push(r.id))
    this.selectedArbiters.forEach(a => this.competition.arbitersIds?.push(a.id))
    
    this.adminCompetitionsService.addNewCompetition(this.competition).subscribe(
      {
        next: () => this.router.navigateByUrl("/administration/rider/competitions"),
        error: err => console.error(err)
      }
    )

  }


  public firstStepSubmit() {

  }

  public addArbiterToCompetition(arbiter: Arbiter) {
    this.selectedArbiters.push(arbiter)
    //console.log(this.selectedArbiters)
  }

  public removeArbiterFromCompetition(arbiter: Arbiter) {
    const arbiterToDelete = this.selectedArbiters.indexOf(arbiter)
    //console.log(this.selectedArbiters)
    this.selectedArbiters.splice(arbiterToDelete, 1)
  }

  public addRiderToCompetition(rider: Rider) {

    if(rider.horses.length === 0)
      this.msgService.message("Jazdec ktorý nema príradeného koňa nemôže byť priradený na súťaž!")
    else{
      this.selectedRiders.push(rider)
      console.log(this.selectedRiders)
    }
  }

  public removeRiderFromCompetition(rider: Rider) {
    const riderToDelete = this.selectedRiders.indexOf(rider)
    //console.log(this.selectedRiders)
    this.selectedRiders.splice(riderToDelete, 1)
  }




  private getAllArbiters() {
    this.adminArbiterService.getAdminArbiters().subscribe(arbiters => {
      this.arbiters = arbiters
    })
    console.log(this.arbiters)
  }

  private getAllRiders() {
    this.adminRiderService.getAllRiders().subscribe(riders => {
      this.riders = riders
    })
  }


  competitionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

}
