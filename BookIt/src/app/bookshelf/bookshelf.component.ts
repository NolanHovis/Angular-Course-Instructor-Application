import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})

export class BookshelfComponent implements OnInit {
  private bookSelectSub: Subscription;
  private closeSub: Subscription;

  constructor(private bsService: BookshelfService, private componentFactoryResolver: ComponentFactoryResolver) { }
  
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  ngOnInit(): void {
    this.bookSelectSub = this.bsService.bookSelected.subscribe(book=>{
      const alertMessage = `Book: ${book.title} was removed from your library!`
      this.showRemoveAlert(alertMessage);
    });
  }
  
  ngOnDestroy(){
    this.bookSelectSub.unsubscribe();
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  showRemoveAlert(message: string){
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    const clearAlert = () => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    }
    this.closeSub = componentRef.instance.close.subscribe(() => {
      clearAlert()
    });

    setTimeout(() => {
      if(this.closeSub){
        clearAlert()
      }
    }, 2500)
  }  
}



/* export class BookshelfComponent implements OnInit {
  alert: string;

  private bookChangeSub: Subscription;
  constructor(private bsService: BookshelfService) { }


  ngOnInit(): void {
    this.bookChangeSub = this.bsService.bookSelected.subscribe(book=>{
      console.log(book);
      this.alert = `${book.title} by ${book.author} was removed from your library!`;
      setTimeout(() => this.onHandleClose(), 3000)
    });
  }
  
  ngOnDestroy(){
    this.bookChangeSub.unsubscribe();
  }
  onHandleClose(){
    this.alert = null;
  }
}
 */