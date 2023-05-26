import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { DataTableComponent } from './components_/data-table/data-table.component';
import { AddRecordComponent } from './components_/add-record/add-record.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ArticlesComponent } from './components_/articles/articles.component';

@NgModule({
    declarations: [
        AdminPanelComponent,
        DataTableComponent,
        AddRecordComponent,
        ArticlesComponent,
    ],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatButtonModule,

        AdministrationRoutingModule
    ]
})
export class AdministrationModule {
}
