import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {
  bookSelected = new EventEmitter<Book>();

  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Testing Title 2',
      'Bill',
      'Science',
      'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
      'Fantasy Test',
      'Rando',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
  ];

  getBooks() {
    return this.myBooks;
  }

  saveBook(book: Book) {
    this.myBooks.push(book);
  }

  removeBook(i) {
    const index: number = i
    if (index !== -1) {
      this.myBooks.splice(index, 1)
    }
  }

}
