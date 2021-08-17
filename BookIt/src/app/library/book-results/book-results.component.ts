import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
  animations: [
    trigger('swoopIn', [
      state('in', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition(':enter', [
        animate('1s', keyframes([
          style({
            transform: 'scale(0)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'scale(0.3)',
            opacity: 0.3,
            offset: 0.2
          }),
          style({
            transform: 'scale(0.6)',
            opacity: 0.6,
            offset: 0.4
          }),
          style({
            transform: 'scale(0.9)',
            opacity: 0.9,
            offset: 0.8
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class BookResultsComponent implements OnInit {
  constructor(
    public libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {}

  onSaveBook(book: Book) {
    return this.bookshelfService.saveBook(book);
  }
}
