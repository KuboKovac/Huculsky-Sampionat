import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Article } from '../models/Article';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/shared/message.service';
import { errorHandler } from 'src/shared/functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminArticlesService {

  private serverUrl: string = environment.baseUrl

  constructor(private http: HttpClient,
    private messageService: MessageService,) { }


  getAdminArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.serverUrl + "Articles/GetAllArticles").pipe(
      map(jsonArticles => jsonArticles.map(jsonArticle => Article.clone(jsonArticle))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

  saveAdminArticle(article: Article): Observable<void> {
    return this.http.post(this.serverUrl + "Articles/CreateArticle", article, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  approvedAdminArticle(id: number, article: Article): Observable<void> {

    return this.http.put(this.serverUrl + "Articles/ApproveArticle/" + id, article, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  dissApprovedAdminArticle(id: number, article: Article): Observable<void> {

    return this.http.put(this.serverUrl + "Articles/DisapproveArticle/" + id, article, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

  deleteAdminArticle(id: number): Observable<void> {
    return this.http.delete(this.serverUrl + "Articles/DeleteArticle/" + id, { responseType: 'text' }).pipe(
      map(response => this.messageService.message(response, 5000)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

}
