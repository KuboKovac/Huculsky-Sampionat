import { Component, HostListener, OnInit } from '@angular/core';
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

  contextMenuVisible = false;
  contextMenuPosition = { x: 0, y: 0 };
  contextMenuIndex: number | null = null;
  contextMenuUrlToDelete = "";

  selectedImage!: FileModel;
  lightboxOpen = false;

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


  onRightClick(event: MouseEvent, item: FileModel) {
    event.preventDefault();
    if (!this.logged)
      return;

    this.contextMenuUrlToDelete = item.url;
    this.contextMenuVisible = true;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.contextMenuIndex = item.id;
  }

  @HostListener('document:click')
  hideContextMenu() {
    this.contextMenuVisible = false;
  }

  deletePhoto(id: any) {
    this.galleryService.deleteImageById(id).subscribe(
      (response) => {
        this.galleryService.getImagesByCategory(this.parameterIds).subscribe(i => this.images = i)
      },
      (error) => {
        console.error('Upload failed', error);
      }
    )
  }

  openLightbox(image: FileModel): void {
    this.selectedImage = image;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }



  nextImage(index: number): void {
    let currentIndex = this.images.findIndex(item => this.selectedImage.id == item.id)

    if (currentIndex + index == -1 || currentIndex + index == this.images.length)
      return;

    this.selectedImage = this.images[currentIndex + index]
  }
}
