import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/shared/message.service';
import { Arbiter } from '../models/Arbiter';
import { Observable, catchError, map } from 'rxjs';
import { errorHandler } from 'src/shared/functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminArbiterService {

  private serverUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private messageService: MessageService,) {

  }

  //DONE!

  getAdminArbiters(): Observable<Arbiter[]> {
    return this.http.get<Arbiter[]>(this.serverUrl + "Arbiters/GetAllArbiters").pipe(
      map(jsonArbiters => jsonArbiters.map(jsonArbiter => Arbiter.clone(jsonArbiter))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

  addArbiter(arbiter: Arbiter): Observable<void> {
    return this.http.post(this.serverUrl + "Arbiters/CreateArbiter", arbiter, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  deleteArbiter(id: Number): Observable<void> {
    return this.http.delete(this.serverUrl + "Arbiters/DeleteArbiter/" + id, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }
  updateArbiter(id: Number, arbiter: Arbiter): Observable<void> {
    return this.http.put(this.serverUrl + "Arbiters/UpdateArbiter/" + id, arbiter, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

}
