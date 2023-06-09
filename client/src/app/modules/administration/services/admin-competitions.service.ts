import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/shared/message.service';
import { Observable, catchError, empty, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';
import { Competition } from '../models/Competition';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class AdminCompetitionsService {

  private serverUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.serverUrl + "Competitions/GetAllCompetitions").pipe(
      map(competitions => competitions.map(competition => Competition.clone(competition)))
      , catchError(err => errorHandler(err, 5000, this.messageService))
    )
  }
  addNewCompetition(competition: Competition): Observable<void> {
    return this.http.post(this.serverUrl + "Competitions/CreateCompetition", competition, { responseType: "text" })
      .pipe(
        map(response => {
          this.messageService.message(response)
        }), catchError(err => errorHandler(err, 5000, this.messageService))
      )
  }

  lockCompetiton(id: number): Observable<void>{
    return this.http.put(this.serverUrl + "Competitions/LockCompetition/" + id, null, {responseType: "text"}).pipe(
      map(response => {
        this.messageService.message(response)
      }), catchError(err => errorHandler(err, 5000, this.messageService))
    )
  }


  public createResult(riderId: number, result: Result): Observable<void>{
    return this.http.post(this.serverUrl + 'Results/CreateResult/' + riderId, result, {responseType:'text'}).pipe(
      map(response => {
        this.messageService.message(response)
      }),catchError(err => errorHandler(err,5000,this.messageService))
    )
  }

  deleteCompetition(/*ID*/) {

  }
  assignRidersToCompetiton(/*ID*/) { }

  removeRidersFromCompetition(/*ID*/) {

  }

  addArbiterToCompetition(/*Competition ID,ARBITER*/) {

  }
}
