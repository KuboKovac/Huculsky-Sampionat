import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horse } from '../models/Horse';
import { MessageService } from 'src/shared/message.service';
import { Observable, catchError, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';

@Injectable({
  providedIn: 'root'
})
export class AdminHorsesService {

  private serverUrl: string = "https://localhost:7282/";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAllHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.serverUrl + "Horses/GetAllHorses").pipe(
      map(jsonHorses => jsonHorses.map(jsonHorse => Horse.clone(jsonHorse))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

}
