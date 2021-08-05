import { Component, Input, OnInit} from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book
  selectedBook: Book

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.bookshelfService.bookSelected.emit(this.book);
  }
}
