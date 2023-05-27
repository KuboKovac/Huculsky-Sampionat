import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { DataTableComponent } from './components_/data-table/data-table.component';
import { AddRecordComponent } from './components_/add-record/add-record.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ArticlesComponent } from './components_/articles/articles.component';
import { NewArticleComponent } from './components_/new-article/new-article.component';
import { AdminHeaderComponent } from './components_/admin-header/admin-header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        AdminPanelComponent,
        DataTableComponent,
        AddRecordComponent,
        ArticlesComponent,
        NewArticleComponent,
        AdminHeaderComponent,
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

        AdministrationRoutingModule
    ]
})
export class AdministrationModule {
}
