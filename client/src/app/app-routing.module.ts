import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "news", component: NewsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "login", component: LoginComponent },
  { path: "administration", loadChildren: () => import('src/app/modules/administration/administration.module').then(m => m.AdministrationModule), pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
