import { Book } from '../shared/book.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  bookshelf: ReadonlyArray<string>;
}
