import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  public Editor: any = ClassicEditor;

  public editorContent: string = "";

  constructor(public articleService: ArticlesService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>
      this.articleService.getSpecifiedArticle(param.get("id")!).subscribe(response => this.editorContent = response.text)
    )

    /*let id = this.route.snapshot.paramMap.get("id");
    this.articleService.getSpecifiedArticle(id!).subscribe(response => this.value = response.text);
    console.log(id)*/
  }




}
