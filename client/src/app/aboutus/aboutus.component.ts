import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Editor from 'ckeditor5-custom/build/ckeditor.js';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class AboutusComponent implements OnInit {
  parameterIds: string = "";
  isEditing: boolean = false;
  editorContent: any = "";
  editor: any = Editor;

  logged: string | null = localStorage.getItem("Jwt");

  constructor(private articleService: ArticlesService, private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.parameterIds = param.get("id")!;
      this.articleService.getSpecifiedArticle(this.parameterIds).subscribe(response => this.editorContent = response.customHTML)
    }
    )

  }

  edit() {
    this.isEditing = !this.isEditing;
  }


  postEdited() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: 'Potvrdenie zmeny',
        text: `Naozaj chcete urobiť túto zmenu ?`
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.editSpecifiedArticle(this.parameterIds, this.editorContent)
          .subscribe()
        this.isEditing = false
      }
    })

  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  sanitizeStyle(content: string) {
    return this.sanitizer.bypassSecurityTrustStyle(content);
  }
}
