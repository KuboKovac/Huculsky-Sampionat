import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit, OnDestroy {

  imageUrls = [
    '../../assets/resources/Hero-header/1.jpg',
    '../../assets/resources/Hero-header/2.jpg',
    '../../assets/resources/Hero-header/3.jpg',
    '../../assets/resources/Hero-header/4.jpg',
    '../../assets/resources/Hero-header/5.jpg',
    '../../assets/resources/Hero-header/6.jpg',
    '../../assets/resources/Hero-header/7.jpg',
    '../../assets/resources/Hero-header/8.jpg',
    '../../assets/resources/Hero-header/9.jpg',
  ];

  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlideShow();
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
