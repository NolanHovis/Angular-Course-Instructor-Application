import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Book } from "../shared/book/book.model";
import { DataStorageService } from "../shared/data-storage/data-storage.service";
import { BookshelfService } from "./bookshelf.service";


@Injectable({providedIn:'root'})
export class BooksResolverService implements Resolve<Book[]>{

  constructor(private dataStorageService: DataStorageService, private bookShelfService: BookshelfService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const books = this.bookShelfService.getBooks();
    if(books.length == 0){
      return this.dataStorageService.fetchBooks();
    }else{
      return books;
    }
  }
}
