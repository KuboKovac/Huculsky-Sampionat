import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../modules/administration/models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = []

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getAllArticles()
  }

  getAllArticles() {
    this.newsService.getArticle().subscribe(
      articlesFromServer => this.articles = articlesFromServer.reverse(),

    )
  }
}
