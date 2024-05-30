import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private serverUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<article> {
    return this.http.get<article>('../../assets/navbarItems.json')
  }

  getSpecifiedArticle(param: string): Observable<article> {
    return this.http.get<article>(this.serverUrl + 'CustomContent/GetContentById/' + param).pipe()
  }

  editSpecifiedArticle(param: string, editedContext: string): Observable<any> {
    let customHtml = { "customHTML": editedContext }
    return this.http.put<string>(this.serverUrl + 'CustomContent/UpdateCustomContent/' + param, customHtml).pipe(
      map(response => console.log(response)),
    )
  }

}


export interface article {
  param: string;
  customHTML: string;
}