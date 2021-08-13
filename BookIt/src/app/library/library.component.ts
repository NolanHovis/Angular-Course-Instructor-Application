import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})

export class LibraryComponent implements OnInit, OnDestroy {
  alert: string; 

  private bookSelectSub: Subscription;
  constructor(private bsService: BookshelfService, private loggingService: LoggingService) { }


  ngOnInit(): void {
    this.bookSelectSub = this.bsService.bookSelected.subscribe(book=>{
      this.alert = `${book.title} by ${book.author} was added to your library!`;
      setTimeout(() => this.onHandleClose(), 3000)
    });
    this.loggingService.printLog('Hey from library')
  }
  
  ngOnDestroy(){
    this.bookSelectSub.unsubscribe();
  }
  onHandleClose(){
    this.alert = null;
  }
}
