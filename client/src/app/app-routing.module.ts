import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RoleGuard } from './modules/auth/guards/role.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "component/:id", component: AboutusComponent },
  { path: "news", component: NewsComponent },
  { path: "gallery/:id", component: GalleryComponent },
  { path: "login", component: LoginComponent },
  {
    path: "administration", loadChildren: () => import('src/app/modules/administration/administration.module')
      .then(m => m.AdministrationModule), pathMatch: 'full', canActivate: [RoleGuard]
  },
];

const routerOptions: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] // Optional, to adjust for a fixed header
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
