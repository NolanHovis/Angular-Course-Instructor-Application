import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  allBooks: Book[] = [
    new Book(
      'Testing API Books 2',
      'Bill',
      'Science',
      'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
      'Library Test',
      'Rando',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
      'Book of API',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
  ];
  bookCol1: Book[] = [];
  bookCol2: Book[] = [];

  constructor () {}

  getBooks() {
    return this.allBooks.slice()
  }

}
