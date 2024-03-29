import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horse } from '../models/Horse';
import { MessageService } from 'src/shared/message.service';
import { Observable, catchError, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';
import { ridersIds } from '../models/ridersIds.js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminHorsesService {

  private serverUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAllHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.serverUrl + "Horses/GetAllHorses").pipe(
      map(jsonHorses => jsonHorses.map(jsonHorse => Horse.clone(jsonHorse))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

  addHorse(horse: Horse): Observable<void> {
    return this.http.post(this.serverUrl + "Horses/CreateNewHorse", horse, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  deleteHorse(id: number): Observable<void> {
    return this.http.delete(this.serverUrl + "Horses/DeleteHorse/" + id, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  addRidersToHorse(horseId: number, riders: ridersIds): Observable<void> {
    return this.http.put(this.serverUrl + "Horses/AssingRidersToHorse/" + horseId, riders, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  removeRidersToHorse(horseId: number, riders: ridersIds): Observable<void> {
    return this.http.put(this.serverUrl + "Horses/RemoveRidersFromHorse/" + horseId, riders, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

}
