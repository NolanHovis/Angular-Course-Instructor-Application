import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  booksChanged = new Subject<Book[]>();

  private myBooks : Book[] = []
  getBooks() {
    return this.myBooks;
  }

  getBook(id: number) {
    return this.myBooks[id];
  }

  setBooks(books: Book[]){
    this.myBooks = books;
    this.booksChanged.next(this.myBooks.slice());

  }

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSelected.next(book);
  }

  removeBook(i) {
    const index: number = i;
    if (index !== -1) {
      const removedBook = this.getBook(index);
      this.myBooks.splice(index, 1);
      this.booksChanged.next(this.myBooks.slice());
      this.bookSelected.next(removedBook);
    }
  }

  addBook(book: Book) {
    this.myBooks.push(book);
    this.booksChanged.next(this.myBooks.slice());
  }

  updateBook(index: number, updatedBook: Book) {
    this.myBooks[index] = updatedBook;
    this.booksChanged.next(this.myBooks.slice());
  }
}
