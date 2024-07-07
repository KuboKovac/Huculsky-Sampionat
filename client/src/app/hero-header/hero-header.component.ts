import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit, OnDestroy {


  imageUrls: string[] = [

  ];

  currentIndex = 0;
  interval: any;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getImagesByCategory("sutaze").subscribe(result => {
      console.log(result)
      result.forEach(i => this.imageUrls.push(i.url))
      this.startSlideShow();

    })

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startSlideShow(): void {
    this.interval = setInterval(() => {
      if (this.currentIndex === this.imageUrls.length - 3) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, 4000);
  }

}
