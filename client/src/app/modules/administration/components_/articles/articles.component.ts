import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [
    new Article("Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", false),
    new Article("Imhotep", new Date().toLocaleString(), "Egypt vyhlasil vojnu proti slovensku", "Ta čo viacej poviem tu len števo dačo skúša", false),
    new Article("Stevo", new Date().toLocaleString(), "Števo pridal article", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed provident eius suscipit, natus nihil consequatur harum obcaecati numquam enim et voluptate voluptates, debitis sapiente atque veniam odio illum aut. ", false),
    new Article("Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", false),
    new Article("Stevo", new Date().toLocaleString(), "Števo pridal article", "Ta čo viacej poviem tu len števo dačo skúša", false),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
