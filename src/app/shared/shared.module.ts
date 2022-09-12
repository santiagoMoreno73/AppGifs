import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { SideBarComponent } from "./SideBar/sidebar.component";

@NgModule({
    declarations: [
        SideBarComponent
    ],
    exports: [
        SideBarComponent
    ],
    imports: [
        CommonModule
    ]
})

export class SharedModule {}