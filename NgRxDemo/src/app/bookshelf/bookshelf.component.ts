import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
})
export class BookshelfComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
}
