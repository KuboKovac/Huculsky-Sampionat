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

  startIndex: number = 0
  endIndex: number = 5

  articles: Article[] = [];
  public articleSliced: Article[] = []

  onlyApproved: Boolean = true;


  constructor(private articleService: AdminArticlesService,) { }

  ngOnInit(): void {

    /*
    const pipeEnd: Observable<Article[]> = this.articleService.getAdminArticle()

    pipeEnd.subscribe(
      {
        next: ariclesArray => this.articles = ariclesArray,
        error: error => error.message = "Nepodarilo sa načitať články.",
        complete: () => this.articleSliced = this.articles.slice(0, 5),
      }
    )
    */
    this.getArticleFromServer();
  }

  getArticleFromServer() {
    this.articleService.getAdminArticle().subscribe(
      articles => {
        this.articles = articles
        this.articleSliced = this.articles.slice(this.startIndex, this.endIndex)
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
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    if (this.endIndex > this.articles.length) {
      this.endIndex = this.articles.length;
    }
    this.articleSliced = this.articles.slice(this.startIndex, this.endIndex)
  }

  approveArticle(article: Article) {
    this.articleService.approvedAdminArticle(article.id, article).subscribe(
      () => this.getArticleFromServer()
    )
  }
  dissApproveArticle(article: Article) {
    this.articleService.dissApprovedAdminArticle(article.id, article).subscribe(
      () => this.getArticleFromServer()
    )
  }

  deleteArticle(article: Article) {
    if (confirm("Naozaj chceš zmazať článok " + article.name + " ?")) {
      this.articleService.deleteAdminArticle(article.id).subscribe(
        () => this.getArticleFromServer()
      )
    }
  }
}
