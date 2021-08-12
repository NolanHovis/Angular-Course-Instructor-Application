import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css'],
})
export class BookshelfEditorComponent implements OnInit {
  id: number;
  isEditMode = false;
  bookForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router: Router ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.isEditMode = params['id'] != null;
      this.initForm()
      console.log('%c  isEditMode: ', 'color: red;', this.isEditMode);
    });
  }

  onSubmit() {
    // const book = new Book(
    // this.bookForm.value['title'],
    //  this.bookForm.value['author'],
    //  this.bookForm.value['genre'],
    //  this.bookForm.value['coverImagePath'])
    if (this.isEditMode) {
      this.bookshelfService.updateBook(this.id, this.bookForm.value)
    }
    else {
      this.bookshelfService.addBook(this.bookForm.value)
    }
    this.onCancel()
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm() {
    let bookTitle = '';
    let bookAuthor = '';
    let bookGenre = '';
    let bookImagePath = '';
    let bookPrice = 0;

    if (this.isEditMode) {
      const book = this.bookshelfService.getBook(this.id);
      bookTitle = book.title;
      bookAuthor = book.author;
      bookGenre = book.genre;
      bookImagePath = book.coverImagePath;
      bookPrice = book.price
    }
    this.bookForm = new FormGroup({
      'title': new FormControl(bookTitle, Validators.required),
      'author': new FormControl(bookAuthor, Validators.required),
      'genre': new FormControl(bookGenre, Validators.required),
      'coverImagePath': new FormControl(bookImagePath, Validators.required),
      'price': new FormControl(bookPrice, Validators.required)
    })
  }
}
