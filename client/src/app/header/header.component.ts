import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostBinding('class.buger-menu-opened') navbarOpened: Boolean = false;

  constructor() { }

  navbarToggle() {
    this.navbarOpened = !this.navbarOpened;
  }

}
