import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdministrationModule } from "./modules/administration/administration.module";
import { AuthModule } from './modules/auth/auth.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NewNavbarComponent } from './new-navbar/new-navbar.component';
import { GalleryAddImageModalComponent } from './gallery/galleryModal/gallery-add-image-modal/gallery-add-image-modal.component';

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
        ConfirmationDialogComponent,
        NewNavbarComponent,
        GalleryAddImageModalComponent,
    ],
    imports: [
        NoopAnimationsModule,
        AdministrationModule,
        AuthModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTabsModule,
        FormsModule,
        MatSidenavModule,
        CKEditorModule,

        AppRoutingModule,
        MatDialogModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
