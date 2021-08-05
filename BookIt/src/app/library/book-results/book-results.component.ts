import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  @Input() allBooks: Book[]



  constructor(private libraryService: LibraryService, private bookshelfService: BookshelfService) {
  }

  ngOnInit(): void {
    this.libraryService.allBooks.forEach((book, idx) => {
      if (idx % 2 === 0) {
        this.libraryService.bookCol1.push(book);
      } else {
        this.libraryService.bookCol2.push(book);
      }
    });

    this.allBooks = this.libraryService.getBooks()

  }

  onSaveBook(book: Book) {
    return this.bookshelfService.saveBook(book)
  }
}
