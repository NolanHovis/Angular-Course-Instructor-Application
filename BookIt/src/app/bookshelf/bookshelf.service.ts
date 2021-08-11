import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  booksChanged = new Subject<Book[]>()


  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book',
      29.99
    ),
    new Book(
      'Testing Title 2',
      'Bill',
      'Science',
      'https://source.unsplash.com/50x50/?science,book',
      15.99
    ),
    new Book(
      'Fantasy Test',
      'Rando',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book',
      14.99
    ),
  ];

  getBooks() {
    return this.myBooks;
  }

  getBook(id: number) {
    return this.myBooks[id];
  }

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSelected.next(book);
  }

  removeBook(i) {
    const index: number = i;
    if (index !== -1) {
      this.myBooks.splice(index, 1);
      this.booksChanged.next(this.myBooks.slice())
    }
  }

  addBook(book: Book) {
    this.myBooks.push(book);
  }

  updateBook(index: number, updatedBook: Book) {
    this.myBooks[index] = updatedBook
  }
}
