import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import { AddRecordComponent } from "./components_/add-record/add-record.component";
import { DataTableComponent } from "./components_/data-table/data-table.component";

const routes = [
    {
        path: 'administration', component: AdminPanelComponent, children:
            [
                {path: ':id/table', component: DataTableComponent},
                {path: ':id/add', component: AddRecordComponent}
            ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}