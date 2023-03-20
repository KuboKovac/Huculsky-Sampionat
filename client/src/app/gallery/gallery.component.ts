import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = [
    {
      url: "../../assets/resources/Hero-header/1.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/2.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/3.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/4.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/5.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/6.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/7.jpg",
      row: ""
    },
    {
      url: "../../assets/resources/Hero-header/8.jpg",
      row: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
