import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Article } from '../modules/administration/models/Article';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from 'src/shared/functions';
import { MessageService } from 'src/shared/message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private serverUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.serverUrl + "Articles/GetApprovedArticles").pipe(
      map(jsonArticles => jsonArticles.map(jsonArticle => Article.clone(jsonArticle))),
      catchError(error => errorHandler(error, 400, this.messageService))
    );
  }

}
