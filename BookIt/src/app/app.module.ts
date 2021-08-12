import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookComponent } from './shared/book/book.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { AddedNotificationComponent } from './shared/added-notification/added-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookshelfComponent,
    LibraryComponent,
    BookListComponent,
    BookDetailsComponent,
    BookComponent,
    BookSearchComponent,
    BookResultsComponent,
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    AddedNotificationComponent,
    SortPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
