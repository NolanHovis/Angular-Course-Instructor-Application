import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
