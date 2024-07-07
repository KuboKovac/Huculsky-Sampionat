import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-add-image-modal',
  templateUrl: './gallery-add-image-modal.component.html',
  styleUrls: ['./gallery-add-image-modal.component.scss']
})
export class GalleryAddImageModalComponent {

  selectedImages: File[] = [];
  selectedCategory: string = "";

  constructor(private galleryService: GalleryService, private dialogRef: MatDialogRef<GalleryAddImageModalComponent>) {

  }

  showImages() {
    console.log(this.selectedCategory)
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.selectedImages = Array.from(input.files)
    }
    this.showImages()
  }

  onSubmit(): void {
    if (this.selectedImages.length < 0)
      return;
    if (this.selectedCategory == "")
      return;

    const formData = new FormData();
    this.selectedImages.forEach((file, index) => {
      formData.append('files', file, file.name);
    });

    this.galleryService.addImages(this.selectedCategory, formData).subscribe(
      (response) => {
        console.log('Upload successful', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Upload failed', error);
      }
    )
  }
}
