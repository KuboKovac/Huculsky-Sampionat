import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  isEditing: boolean = false;
  editorContent: string = "";
  parameterIds: string = "";
  form: FormGroup = new FormGroup({
    html: new FormControl("<p>kokot<p>")
  })
  logged: string | null = localStorage.getItem("Jwt");

  constructor(public articleService: ArticlesService, private route: ActivatedRoute, private sanitizer: DomSanitizer, fb: FormBuilder) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.parameterIds = param.get("id")!;
      this.articleService.getSpecifiedArticle(this.parameterIds).subscribe(response => this.editorContent = response.customHTML)
    }
    )
    /*let id = this.route.snapshot.paramMap.get("id");
    this.articleService.getSpecifiedArticle(id!).subscribe(response => this.value = response.text);
    console.log(id)*/
  }

  edit() {
    this.isEditing = !this.isEditing;
  }


  postEdited() {
    this.articleService.editSpecifiedArticle(this.parameterIds, this.editorContent as string).subscribe()
  }


}
