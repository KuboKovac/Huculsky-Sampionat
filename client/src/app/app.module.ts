import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeroHeaderComponent} from './hero-header/hero-header.component';
import {NewsComponent} from './news/news.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {GalleryComponent} from './gallery/gallery.component';
import {AdministrationModule} from "./modules/administration/administration.module";
import { AuthModule } from './modules/auth/auth.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        HeroHeaderComponent,
        NewsComponent,
        AboutusComponent,
        GalleryComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        AdministrationModule,
        AuthModule,

        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        


        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
