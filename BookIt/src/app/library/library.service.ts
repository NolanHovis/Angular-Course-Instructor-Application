import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  allBooks: Book[] = [];

  constructor(private http: HttpClient) {}

  fetchBooks(query) {
    // Turn Search Param into lowercase words with plus sign for spaces
    const formattedSearchParam = query.split(' ').join('+').toLowerCase();

    // Send Http request to GET all data from the provided url
    this.http
      .get(`https://openlibrary.org/search.json?q=${formattedSearchParam}`)
      .subscribe((response) => {
        this.allBooks = [];
        this.saveBooks(response);
      });
  }

  getBooks() {
    return this.allBooks.slice();
  }

  saveBooks(books) {
    // Map over all the book results
    books.docs.map((book) => {
      // Destructure the book results
      const { title, author_name, first_publish_year, isbn } = book;

      // For each book result, create a new book
      const newBook = new Book(
        title,
        author_name ? author_name[0] : 0,
        '',
        '',
        0,
        first_publish_year,
        isbn ? isbn[0] : ''
      );

      // Add it to allBooks array
      this.allBooks = this.allBooks.concat(newBook);
    });
  }
}
