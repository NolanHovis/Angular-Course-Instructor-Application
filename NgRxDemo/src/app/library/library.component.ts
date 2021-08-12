import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
})
export class LibraryComponent {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
}
