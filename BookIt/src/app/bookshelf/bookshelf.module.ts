import { NgModule } from "@angular/core";
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf-editor/bookshelf-editor.component';
import { BookshelfComponent } from './bookshelf.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SortPipe } from "../sort.pipe";
import { BookshelfRoutingModule } from "./bookshelf-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    BookshelfComponent,
    BookListComponent,
    BookDetailsComponent,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    SortPipe
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    BookshelfRoutingModule
  ]
})
export class BookshelfModule {

}