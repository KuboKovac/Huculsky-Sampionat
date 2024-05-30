import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<article> {
    return this.http.get<article>('../../assets/navbarItems.json')
  }

  getSpecifiedArticle(param: string): Observable<Context> {
    return this.http.get<navbarItems>('../../assets/navbarItems.json').pipe(
      map(data => {
        const page = data.pages.find(result => result.param === param)
        return page!.context
      }),
    )
  }

  getData(): Observable<any> {
    return this.http.get<any>('../../assets/navbarItems.json');
  }

}


export interface article {
  param: string;
  context: Context;
}

export interface Context {
  title: string;
  text: string;
}
interface navbarItems {
  pages: article[]
}
