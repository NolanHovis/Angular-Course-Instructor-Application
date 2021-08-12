import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookshelfService } from "src/app/bookshelf/bookshelf.service";
import { Book } from "../book/book.model";
import { exhaustMap, take, tap } from 'rxjs/operators'
import { AuthService } from "src/app/auth/auth.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private bookShelfService: BookshelfService, private authService: AuthService) { }

  storeBooks() {
    const books = this.bookShelfService.getBooks();
    this.http.put("https://bookit-d4823-default-rtdb.firebaseio.com/books.json", books)
      .subscribe(response => [
        console.log(response)
      ])
  }


  fetchBooks() {
      return this.http.get<Book[]>("https://bookit-d4823-default-rtdb.firebaseio.com/books.json", {
      }).pipe(
      tap(books => {
        this.bookShelfService.setBooks(books)
      }))
    }
}
