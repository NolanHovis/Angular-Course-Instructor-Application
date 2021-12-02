// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

// REDUCERS
import { bookshelfReducer } from './state/bookshelf.reducer';
import { libraryReducer } from './state/library.reducer';

// COMPONENTS
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [AppComponent, BookshelfComponent, LibraryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ books: libraryReducer, bookshelf: bookshelfReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
