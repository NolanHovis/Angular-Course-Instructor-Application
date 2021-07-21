import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    this.allBooks.forEach((book, idx) => {
      if (idx % 2 === 0) {
        this.bookCol1.push(book);
      } else {
        this.bookCol2.push(book);
      }
    });
  }
}
