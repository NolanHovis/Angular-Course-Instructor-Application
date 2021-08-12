import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GoogleBooksService } from './shared/book.service';
import { addBook, getAllBooks, removeBook } from './state/book.actions';
import { selectAllBooks, selectBookshelf } from './state/book.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  library$ = this.store.pipe(select(selectAllBooks));
  bookshelf$ = this.store.pipe(select(selectBookshelf));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe((Book) => {
      this.store.dispatch(getAllBooks({ Book }));
    });
  }
}
