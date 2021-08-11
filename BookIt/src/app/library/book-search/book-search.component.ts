import { LibraryService } from './../library.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {}

  onFetchBooks(searchParam) {
    this.libraryService.fetchBooks(searchParam);
  }
}
