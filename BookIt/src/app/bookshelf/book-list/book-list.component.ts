import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  @Input() myBooks: Book[];
  @Input() book: Book;

  sortSwitcher = true
  sortField = 'author'
  buttonDisplay = 'title'

  listItemState = 'in'

  private bookSub:Subscription;
  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookSub = this.bookshelfService.booksChanged.subscribe(books=>{
      this.myBooks = books;
    });
    this.myBooks = this.bookshelfService.getBooks();
  }

  onSort() {
    this.sortSwitcher = !this.sortSwitcher;
    if (this.sortSwitcher === true) {
      this.sortField = 'author'
      this.buttonDisplay= 'title'
    }
    else {
      this.sortField = 'title'
      this.buttonDisplay = 'author'
    }
  }

  onRemoveBook(i) {
    this.bookshelfService.removeBook(i);
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(){
    this.bookSub.unsubscribe();
  }
}
