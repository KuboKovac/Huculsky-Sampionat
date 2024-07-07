import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { FileModel } from '../models/FileModel';
import { MatDialog } from '@angular/material/dialog';
import { GalleryAddImageModalComponent } from './galleryModal/gallery-add-image-modal/gallery-add-image-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: FileModel[] = []
  private parameterIds: string = "";
  logged: string | null = localStorage.getItem("Jwt");

  constructor(private galleryService: GalleryService, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      this.parameterIds = param.get("id")!;
      this.galleryService.getImagesByCategory(this.parameterIds).subscribe(i => this.images = i)
    }
    )
  }

  openModalWindow() {
    const dialogRef = this.dialog.open(GalleryAddImageModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.galleryService.getImagesByCategory(this.parameterIds).subscribe(i => this.images = i)
      }
    });
  }

}
