import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/shared/message.service';
import { Rider } from '../models/Rider';
import { Observable, catchError, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';

@Injectable({
  providedIn: 'root'
})
export class AdminRidersService {

  private serverUrl: string = "https://localhost:7282/";

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getAllRiders(): Observable<Rider[]> {
    return this.http.get<Rider[]>(this.serverUrl + "Riders/GetAllRiders").pipe(
      map(jsonRiders => jsonRiders.map(jsonRider => Rider.clone(jsonRider))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

}
