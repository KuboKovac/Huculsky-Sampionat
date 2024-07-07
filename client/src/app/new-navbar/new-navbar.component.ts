import { Component } from '@angular/core';

@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.scss']
})
export class NewNavbarComponent {
  navbarOpened: Boolean = false;
  activeIndex: number | null = null;

  navbarToggle() {
    this.navbarOpened = !this.navbarOpened;
    this.activeIndex = null;
  }


  setActive(index: number) {
    this.activeIndex = index;
  }

  isMobile(): boolean {
    return window.matchMedia('(max - width: 767px)').matches;
  }

}
