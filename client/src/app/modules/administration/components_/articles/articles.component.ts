import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", null, true),
    new Article(0, "Imhotep", new Date().toLocaleString(), "Lorem impsum", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed provident eius suscipit,natus nihil consequatur harum obcaecati numquam enim et voluptate voluptates, debitis sapienteatque veniam odio illum aut", null, false),
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed provident eius suscipit, natus nihil consequatur harum obcaecati numquam enim et voluptate voluptates, debitis sapiente atque veniam odio illum aut. ", null, false),
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", null, false),
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", null, true),
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", null, false),
    new Article(0, "Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", null, false),
  ];
  public articleSliced = this.articles.slice(0, 5)

  onlyApproved: Boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  sortByApproved(): Article[] {
    this.onlyApproved = !this.onlyApproved;
    if (!this.onlyApproved) {
      return this.articles
    } else {
      return this.articles.filter(value => value.approvedArticle == true);
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
