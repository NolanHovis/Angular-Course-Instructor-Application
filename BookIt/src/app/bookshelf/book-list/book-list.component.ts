import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  sortSwitcher = true
  sortField = 'author'

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();
  }

  onSort() {
    this.sortSwitcher = !this.sortSwitcher;
    if (this.sortSwitcher === true) {
      this.sortField = 'author'
    }
    else {
      this.sortField = 'title'
    }
  }

  onRemoveBook(i) {
    this.bookshelfService.removeBook(i);
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
