# Class 9 - Understanding Observables

---

## Class Outline

1. Change EventEmitter to Subject for cross-component communication
2. Add an alert Notification component to demonstrate Observables and the subscribe() method
3. Removing code we don't need

---

---

## Observables Overview



RECAP of Javascript knowledge
What is a promise?
    - A promise in Javascript is an object which represent the eventual completion or failure of an asynchronous operation. Promises represent a proxy for a value which are getting in some point in the future.

What is asynchronous and synchronous?
    - Synhronous code is executed in a sequence - each statement waits for the previous statement to finish before executing.
    - Asynchronous code does not have to wait, your program can continue to run. Reason for this is so that you keep your site/app responsive and provides a friendly user experience. An http request is an example of an asynchronous request.

Lecture
    Outline:
        What is an observable?
        What is an observer?
        What does the subscribe method do?
        What does the unsubscribe method do?
        What are rxJs operators?
        What does map do?
        What does pipe do?
        What is a subject?

![observables](https://i.stack.imgur.com/vvHEc.png)

What is an observable?
    - Observable is a stream of events or data. In angular, an observable is just an object we import from rxjs.
    - An observable can emit data programmatically or by a button for example.
    - Observables can return values asynchronously but also synchronously.
    - An observable is like a placeholder by subscribing to it you are saying "when this happens, do this" It can happen at anytime asyncchronously.
    - this.route.params is an example of an observable(stream of data)

What is an observer?
    - An Observer is basically something that subscribes to Observable. With observers, we can handle data, handle errors and handle completion.

What is subscribe?
    - Subscribing "kicks off" the observable stream. Without a subscribe (or an async pipe) the stream won't start emitting values. It's similar to subscribing to a newspaper or magazine ... you won't start getting them until you subscribe.
    -   The subscribe method takes an observer.

What does the unsubscribe method do?
    - The unsubscribe method cancels observable executions. This is good when you don't want many instances happening at once to preserve resources. Some observables have a built in angular configuration unsubscription that it will handle on it's own.

    - You are able to build your own observables with the Observable object imported from rxJs.

What are rxJs operators?
    - rxJs operators are simply methods that you can use on Observables (and Subjects) that allow you to change the original observable in some manner and return a new observable.
    Examples of rxjs: map, filter, concat, ect

What does map do?
    - used to transform data before the observable transmits the data to what is being subscribed to.

    Note:
    - You can filter out what to transmit with the filter operator

What does pipe do?
    - Pipe is an observable method used to combine RxJS operators to compose asynchronous
operations

What is a subject?
- Subject is a special type of Observable in RxJs Library in which we can send our data to other components or services.

- Although subjects can be more efficient than event emitters, subjects are found to be used as cross component event emitters.


## Project Steps

### STEP 1: Change EventEmitter to Subject for cross-component communication

1. Navigate to bookshelf.service.ts ** ..app\bookshelf\bookshelf.service.ts **

2. import Subject from rx'js and remove event emitter

3. Add a new Subject with type Book

```typescript
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();

.
.
.
  removeBook(i) {
    const index: number = i;
    if (index !== -1) {
      this.myBooks.splice(index, 1);
    }
  }
}
```

4. Change the emit method to the next method 
- The next method emits the data

```typescript
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSelected.next(book);
  }
```

5. Get rid of methods onSelected() as we don't need them anymore.

- navigate to book-details.component.ts ** app\bookshelf\book-details\book-details.component.ts **

and delete

your file should look like this

```typescript
.
.
.
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.book = this.bookshelfService.getBook(this.id);
    });
  }

  onEditBook() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
```

- Do the same for book-list.component.ts

navigate to **app\bookshelf\book-list\book-list.component.ts **

6. Demonstrate adding books

Problem:

When we are emmitting an event, we aren't able to see those changes within different component when they are subscribed to it. For this, let's create a notification component to demonstrate the subscription concept.

### STEP 2: Add a alert Notification component

1. add a alert Notification component to the shared folder called added-notification
   `ng g c shared/added-notification`

2. Go to library.component.html ** app\library\library.component.html ** and add  app-added-notification component

```html
<div class="row">
.
.
.
    <app-book-results></app-book-results>
  </div>
</div>

<app-added-notification></app-added-notification>

```

3. navigate to the added-notification.component.ts file

4. Inject bookshelfService and incorporate a subscribe method from the bookSelected Subject

```typescript
import { Component, OnInit } from "@angular/core";
import { BookshelfService } from "src/app/bookshelf/bookshelf.service";
@Component({
  selector: "app-added-notification",
  templateUrl: "./added-notification.component.html",
  styleUrls: ["./added-notification.component.css"],
})
export class AddedNotificationComponent implements OnInit {
  constructor(private bsService: BookshelfService) {}

  ngOnInit(): void {
    this.bsService.bookSelected.subscribe((data) => {});
  }
}
```

5. console log the data and print the title and author to the alert method.

\*\* NOTE: We can animate a pop up notification when we get to that section.

```typescript
  ngOnInit(): void {
    this.bsService.bookSelected.subscribe(data=>{
      console.log(data);
      alert(`title: ${data.title}\n author: ${data.author}`)

    });
  }
```

6. finally, declare a subscription on intialization, setting it to what you have subscribe to, and then unsubscribe in the ngOnDestroy() method.

```typescript
.
.
.
export class AddedNotificationComponent implements OnInit, OnDestroy {

  private bookChangeSub: Subscription;
  .
  .
  .

  ngOnInit(): void {
    this.bookChangeSub = this.bsService.bookSelected.subscribe
    .
    .
    .
    });
  }
  ngOnDestroy(){
    this.bookChangeSub.unsubscribe();
  }
}
```

### STEP 3: Removing code we don't need

1. navigate to the bookshelf.component.ts file ** app\bookshelf\bookshelf.component.ts **

- remove declared book, services, and the subscribe method as we aren't passing any information down to our components or listening to any events.
