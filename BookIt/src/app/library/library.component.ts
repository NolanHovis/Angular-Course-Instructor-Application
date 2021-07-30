import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  bookToSave: Book

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }


}
