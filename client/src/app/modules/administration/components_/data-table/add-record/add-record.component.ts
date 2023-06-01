import { Component, OnInit } from '@angular/core';
import { Rider } from '../../../models/Rider';
import { AdminRidersService } from '../../../services/admin-riders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {

  newRider: Rider = new Rider;

  constructor(private ridersService: AdminRidersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ridersService.addNewRider(this.newRider).subscribe({
      next: () => this.router.navigateByUrl("/administration/riders/table"),
      error: errr => console.log(errr),
    }
    )
  }
}
