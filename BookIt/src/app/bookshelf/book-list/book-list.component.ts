import { Component, Input, OnInit} from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() myBooks: Book[];
  @Input() book: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks()
  }

  onBookSelected(){
    this.bookshelfService.bookSelected.emit(this.book)
  }

  onRemoveBook(i) {
    this.bookshelfService.removeBook(i);
  }
}
