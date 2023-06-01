import { Component, HostBinding, NgModule, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../app.component.scss']
})
export class HeaderComponent {

  //@HostBinding('class.buger-menu-opened')  <--- kokocina dava mi to do app componentu nie do danej classi
  navbarOpened: Boolean = false;
  constructor() { }

  navbarToggle() {
    this.navbarOpened = !this.navbarOpened;
  }

  test() {
    console.log("funguje")
  }
}
