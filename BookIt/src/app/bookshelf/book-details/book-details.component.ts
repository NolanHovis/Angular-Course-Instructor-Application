import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book
  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.bookshelfService.bookSelected.emit(this.book)
  }

}
