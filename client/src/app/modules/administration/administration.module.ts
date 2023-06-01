import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { DataTableComponent } from './components_/data-table/data-table.component';
import { AddRecordComponent } from './components_/data-table/add-record/add-record.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ArticlesComponent } from './components_/articles/articles.component';
import { NewArticleComponent } from './components_/articles/new-article/new-article.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AdminHeaderArticlesComponent } from './components_/admin-headers/admin-header-articles/admin-header-articles.component';
import { AdminHeaderRidersComponent } from './components_/admin-headers/admin-header-riders/admin-header-riders.component';
import { AdminHeadersCompetionComponent } from './components_/admin-headers/admin-headers-competion/admin-headers-competion.component';
import { AdminHeadersHorsesComponent } from './components_/admin-headers/admin-headers-horses/admin-headers-horses.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HorsesComponent } from './components_/horses/horses.component';
import { CompetitionsComponent } from './components_/competitions/competitions.component';
import { NewHorseComponent } from './components_/horses/new-horse/new-horse.component';
import { NewCompetitionsComponent } from './components_/competitions/new-competitions/new-competitions.component';
import { ArbiterComponent } from './components_/arbiter/arbiter.component';
import { NewArbiterComponent } from './components_/arbiter/new-arbiter/new-arbiter.component';
import { AdminHeaderArbiterComponent } from './components_/admin-headers/admin-header-arbiter/admin-header-arbiter.component';

@NgModule({
    declarations: [
        AdminPanelComponent,
        DataTableComponent,
        AddRecordComponent,
        ArticlesComponent,
        NewArticleComponent,

        AdminHeaderArticlesComponent,
        AdminHeaderRidersComponent,
        AdminHeadersCompetionComponent,
        AdminHeadersHorsesComponent,
        HorsesComponent,
        CompetitionsComponent,
        NewHorseComponent,
        NewCompetitionsComponent,
        ArbiterComponent,
        NewArbiterComponent,
        AdminHeaderArbiterComponent,
    ],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTabsModule,
        FormsModule,
        MatSidenavModule,

        AdministrationRoutingModule
    ]
})
export class AdministrationModule {
}
