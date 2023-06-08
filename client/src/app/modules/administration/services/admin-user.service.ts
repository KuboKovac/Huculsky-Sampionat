import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { MessageService } from 'src/shared/message.service';
import { User } from '../models/User';
import { errorHandler } from 'src/shared/functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private serverUrl: string = environment.baseUrl;


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  registerUSer(user: User): Observable<void> {
    return this.http.post(this.serverUrl + "Auth/Register", user, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }
}
