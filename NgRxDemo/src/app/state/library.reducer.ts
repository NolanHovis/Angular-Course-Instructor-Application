import { createReducer, on } from '@ngrx/store';
import { getAllBooks } from './book.actions';
import { Book } from '../shared/book.model';

export const initialState: ReadonlyArray<Book> = [];

export const libraryReducer = createReducer(
  initialState,
  on(getAllBooks, (state, { Book }) => [...Book])
);
