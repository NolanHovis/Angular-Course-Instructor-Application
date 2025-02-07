import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './book.actions';

export const initialState: ReadonlyArray<string> = [];

export const bookshelfReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
