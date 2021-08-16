import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "./alert/alert.component";
import { BookComponent } from "./book/book.component";
import { DropdownDirective } from "./dropdown/dropdown.directive";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
        BookComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule,
        BookComponent
    ]
})

export class SharedModule{}