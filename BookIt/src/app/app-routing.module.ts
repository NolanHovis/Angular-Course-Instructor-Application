import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { LibraryComponent } from './library/library.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksResolverService } from './bookshelf/books-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: 'new', component: BookshelfEditorComponent },
      { path: ':id', component: BookDetailsComponent, resolve: [BooksResolverService] },
      { path: ':id/edit', component: BookshelfEditorComponent, resolve: [BooksResolverService] },
    ],
  },
  { path: 'library', component: LibraryComponent },
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
