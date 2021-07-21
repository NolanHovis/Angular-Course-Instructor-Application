import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './shared/book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';
  loadedFeature = 'bookshelf'
   selectedBook: Book;
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }


}
