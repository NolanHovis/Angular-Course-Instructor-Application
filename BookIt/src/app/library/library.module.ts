import { NgModule } from "@angular/core";
import { LibraryComponent } from '../library/library.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BookSearchComponent } from "./book-search/book-search.component";
import { BookResultsComponent } from "./book-results/book-results.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        LibraryComponent,
        BookSearchComponent,
        BookResultsComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([
        { path: '', component: LibraryComponent }
        ])
    ]
})
export class LibraryModule{

}