import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddRecordComponent } from "./components_/data-table/add-record/add-record.component";
import { DataTableComponent } from "./components_/data-table/data-table.component";
import { RoleGuard } from "../auth/guards/role.guard";
import { ArticlesComponent } from "./components_/articles/articles.component";
import { NewArticleComponent } from "./components_/new-article/new-article.component";


const routes = [
    {
        path: 'administration', canActivate: [RoleGuard], component: AdminPanelComponent, children:
            [
                { path: ':id/table', component: DataTableComponent },
                { path: ':id/new/table', component: AddRecordComponent },
                { path: ':id/article', component: ArticlesComponent },
                { path: ':id/new/article', component: NewArticleComponent },
            ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}