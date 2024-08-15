import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.scss']
})

export class NewNavbarComponent {
  navbarOpened: Boolean = false;
  activeIndex: number | null = null;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.navbarOpened && (event.target as HTMLElement).className == "dropdown-content-item") {
      this.navbarOpened = false;
    }
  }

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
