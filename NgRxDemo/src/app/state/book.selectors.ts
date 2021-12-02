import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../shared/book.model';

export const selectAllBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectBookshelfState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>('bookshelf');

export const selectBookshelf = createSelector(
  selectAllBooks,
  selectBookshelfState,
  (books: Array<Book>, bookshelf: Array<string>) => {
    return bookshelf.map((id) => books.find((book) => book.id === id));
  }
);
