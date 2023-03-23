import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const routes = [
    {
        path: 'administration', component: AdminPanelComponent, children:
            [

            ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}