import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.book = this.bookshelfService.getBook(this.id);
    });
  }

  onEditBook() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteBook(){
    this.bookshelfService.removeBook(this.id)
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
