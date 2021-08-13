import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  '[Bookshelf] Add Book',
  props<{ bookId }>()
);

export const removeBook = createAction(
  '[Bookshelf] Remove Book',
  props<{ bookId }>()
);

export const getAllBooks = createAction(
  '[Library/API] Get All Books',
  props<{ Book }>()
);
