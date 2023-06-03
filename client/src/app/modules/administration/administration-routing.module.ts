import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddRecordComponent } from "./components_/data-table/add-record/add-record.component";
import { DataTableComponent } from "./components_/data-table/data-table.component";
import { RoleGuard } from "../auth/guards/role.guard";
import { ArticlesComponent } from "./components_/articles/articles.component";
import { NewArticleComponent } from "./components_/articles/new-article/new-article.component";
import { HorsesComponent } from "./components_/horses/horses.component";
import { CompetitionsComponent } from "./components_/competitions/competitions.component";
import { NewHorseComponent } from "./components_/horses/new-horse/new-horse.component";
import { NewCompetitionsComponent } from "./components_/competitions/new-competitions/new-competitions.component";
import { ArbiterComponent } from "./components_/arbiter/arbiter.component";
import { NewArbiterComponent } from "./components_/arbiter/new-arbiter/new-arbiter.component";
import { AddRiderToHorseComponent } from "./components_/horses/add-rider-to-horse/add-rider-to-horse.component";
import { AddHorseToRiderComponent } from "./components_/data-table/add-horse-to-rider/add-horse-to-rider.component";
import { RemoveHorseToRiderComponent } from "./components_/data-table/remove-horse-to-rider/remove-horse-to-rider.component";


const routes = [
    {
        path: 'administration', canActivate: [RoleGuard], component: AdminPanelComponent, children:
            [
                { path: ':id/table', component: DataTableComponent },
                { path: ':id/new/table', component: AddRecordComponent },
                { path: ':id/merge/table', component: AddHorseToRiderComponent },
                { path: ':id/remove/table', component: RemoveHorseToRiderComponent },

                { path: ':id/horses', component: HorsesComponent },
                { path: ':id/new/horse', component: NewHorseComponent },
                { path: ':id/merge/horse', component: AddRiderToHorseComponent },

                { path: ':id/competitions', component: CompetitionsComponent },
                { path: ':id/new/competition', component: NewCompetitionsComponent },


                { path: ':id/article', component: ArticlesComponent },
                { path: ':id/new/article', component: NewArticleComponent },

                { path: ':id/arbiter', component: ArbiterComponent },
                { path: ':id/new/arbiter', component: NewArbiterComponent },

            ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}