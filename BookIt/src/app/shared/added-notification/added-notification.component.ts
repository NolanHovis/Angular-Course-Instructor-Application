import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
@Component({
  selector: 'app-added-notification',
  templateUrl: './added-notification.component.html',
  styleUrls: ['./added-notification.component.css']
})
export class AddedNotificationComponent implements OnInit, OnDestroy {

  private bookChangeSub: Subscription;
  constructor(private bsService: BookshelfService) { }

  ngOnInit(): void {
    this.bookChangeSub = this.bsService.bookSelected.subscribe(data=>{
      console.log(data);
      alert(`title: ${data.title}\n author: ${data.author}`)
    });
  }

  ngOnDestroy(){
    this.bookChangeSub.unsubscribe();
  }

}
