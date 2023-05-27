import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Article } from '../models/Article';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/shared/message.service';
import { errorHandler } from 'src/shared/functions';

@Injectable({
  providedIn: 'root'
})
export class AdminArticlesService {

  private serverUrl: string = "https://localhost:7282/";

  constructor(private http: HttpClient,
    private messageService: MessageService,) { }


  getAdminArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.serverUrl + "Articles/GetAllArticles").pipe(
      map(jsonArticles => jsonArticles.map(jsonArticle => Article.clone(jsonArticle))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

  saveAdminArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.serverUrl + "Articles/CreateArticle", article).pipe(
      map(jsonArticle => Article.clone(jsonArticle)),
      catchError(error => errorHandler(error, 400, this.messageService))
    )
  }

}
