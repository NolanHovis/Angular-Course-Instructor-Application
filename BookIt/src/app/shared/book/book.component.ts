import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('swoopOut',[
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('in => void', [
      style({
        opacity: 0,
        transform: 'translateX(-200px)'
      }),
      animate('1000ms ease-in')
    ])
    ])
  ]
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() idx: number;



  constructor() {}

  ngOnInit(): void {}

}
