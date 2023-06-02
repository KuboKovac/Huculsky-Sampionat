import { Component, OnInit } from '@angular/core';
import { Article } from '../modules/administration/models/Article';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: Article[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllArticles()
  }

  getAllArticles() {
    this.newsService.getArticle().subscribe(
      articlesFromServer => this.articles = articlesFromServer,

    )
  }
}
