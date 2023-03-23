import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AdministrationRoutingModule} from './administration-routing.module';

@NgModule({
    declarations: [
        AdminPanelComponent,
    ],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,
        AdministrationRoutingModule
    ]
})
export class AdministrationModule {
}
