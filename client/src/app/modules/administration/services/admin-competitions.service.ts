import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/shared/message.service';
import { Observable, catchError, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';
import { Competition } from '../models/Competition';

@Injectable({
  providedIn: 'root'
})
export class AdminCompetitionsService {

  private serverUrl: string = "https://localhost:7282/";

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.serverUrl + "Competitions/GetAllCompetitions").pipe(
      map(competitions => competitions.map(competition => Competition.clone(competition)))
    )
  }
  addNewCompetition() {

  }
  deleteCompetition(/*ID*/) {

  }
  assignRidersToCompetiton(/*ID*/) { }

  removeRidersFromCompetition(/*ID*/) {

  }

  addArbiterToCompetition(/*Competition ID,ARBITER*/) {

  }
}
