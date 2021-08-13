import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshelfEditorComponent } from '../bookshelf/bookshelf-editor/bookshelf-editor.component';
import { BookDetailsComponent } from '../bookshelf/book-details/book-details.component';
import { BookshelfHomeComponent } from '../bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from '../bookshelf/bookshelf.component';
import { BooksResolverService } from '../bookshelf/books-resolver.service';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BookshelfComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: BookshelfHomeComponent },
          { path: 'new', component: BookshelfEditorComponent },
          { path: ':id', component: BookDetailsComponent, resolve: [BooksResolverService] },
          { path: ':id/edit', component: BookshelfEditorComponent, resolve: [BooksResolverService] },
        ],
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookshelfRoutingModule{};