  import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
