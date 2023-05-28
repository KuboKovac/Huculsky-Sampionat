import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import { PageEvent } from '@angular/material/paginator';
import { AdminArticlesService } from '../../services/admin-articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  public articleSliced: Article[] = []

  onlyApproved: Boolean = true;


  constructor(private articleService: AdminArticlesService,) { }

  ngOnInit(): void {
    const pipeEnd: Observable<Article[]> = this.articleService.getAdminArticle()

    pipeEnd.subscribe(
      {
        next: ariclesArray => this.articles = ariclesArray,
        error: error => error.message = "Nepodarilo sa načitať články.",
        complete: () => this.articleSliced = this.articles.slice(0, 5),
      }
    )

  }

  sortByApproved(): Article[] {
    this.onlyApproved = !this.onlyApproved;
    if (!this.onlyApproved) {
      return this.articles
    } else {
      return this.articles.filter(value => value.isApproved == true);
    }
  }


  onClickChangePage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.articles.length) {
      endIndex = this.articles.length;
    }
    this.articleSliced = this.articles.slice(startIndex, endIndex)
  }
}