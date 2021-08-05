import { LibraryComponent } from './library/library.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  { path: 'bookshelf', component: BookshelfComponent },
  { path: 'library', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
