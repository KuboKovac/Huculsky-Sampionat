import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminArticlesService } from '../../services/admin-articles.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  newArticle: Article = new Article()

  constructor(private articleService: AdminArticlesService, private router: Router) { }

  ngOnInit(): void {
  }

  showPreview() {

  }

  onSubmit() {
    // TODO: FIX later keď kubo opraví server ;_;
    this.articleService.saveAdminArticle(this.newArticle).subscribe(
      {
        next: success => {
          if (success) {
            //this.router.navigateByUrl("/administration/rider/article")
          }
        },
        error: errr => console.log(errr),
        complete: () => this.router.navigateByUrl("/administration/rider/article")
      }
    )
  }
}
