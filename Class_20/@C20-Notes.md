# Class 20 - A Basic Introduction to Unit Testing in Angular Apps

## Lesson Outline

Today we will learn:

1. Why Unit Tests.
2. How to Run Tests using the CLI.
3. How to Test Components, Directives, Services and Pipes.
4. How to Simulate Aysnc Tasks.
5. Extra Utilities the Angular 12+ Package Offers.

---

---

## Lesson Notes

- **Unit Testing**: Unit Testing is a software testing methodology that focuses on making sure individual pieces of the source code work as planned.

- Unit Testing is important because it can help gaurd against breaking changes, it can help analyze your code behavior, and reveal design mistakes before it's too late.

- Writing proper tests takes a lot of time to master, and there are many different ways to perform tests depending on a variety of intended outcomes.

- Isolated Tests: You can test pipes that transform data in an isolated enviornment. You don't need the Angular Testing Package to test these.

---

---

## Project Steps

### STEP 1: Create a New Project & Analyzing the Testing Setup

#### Location: Terminal && app.component.spec.ts File

- Create a new project by running `ng new app-for-testing`

- Navigate into the folder and inspect the app.component.spec.ts file.

- Walk through the main function and explain the basic idea of what each function is testing.

_All testing blocks are independent and don't effect each other._

- We need to create the component in each "it" block and run the tests on this fixture/app simulation.

- we "expect" our component to "be something".

---

### STEP 2: Running Tests Using the CLI

#### Location: Terminal

- Run `ng test`.

- Change the title in the app.component.ts file to something new. Save and inspect the error log.

---

### STEP 3: Testing Components & Services

#### Location: Terminal / User Folder

- Create a new component: `ng g c user`.

- Add HTML & TS fake auth example.

_HTML_:

```html
<div *ngIf="isLoggedIn">
  <h2>User is Logged In.</h2>
  <p>Welcome: {{ user.name }}!</p>
</div>

<div *ngIf="!isLoggedIn">
  <h2>User is Logged Out.</h2>
  <p>Please Log In!</p>
</div>
```

_TS_:

```typescript
user!: { name: string };
isLoggedIn = false;
```

#### Location: app/user Folder

- Create a user.service.ts File with a simple user.

_RESULT_:

```typescript
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class UserService {
  user = {
    name: 'Will',
  }
}
```

#### Location: app/user/user.component.ts

- Inject your user service in the constructor and set this.user to be equal to your services user inside ngOnInit().

_RESULT_:

```typescript
constructor(private userService: UserService) {}

ngOnInit(): void {
  this.user = this.userService.user;
}
```

#### Location app/user/user.component.spec.ts

- Write a test that checks our user.name comes from the service.

- Write a test that checks if our isLoggedIn variable properly shows and hides their respective divs.

- Write a test that checks if user isn't logged in works properly.

_RESULT_:

```typescript
it('should pull the user name from the user service', () => {
  let userService = fixture.debugElement.injector.get(UserService)
  expect(component.user.name).toEqual(userService.user.name)
})

it('should display the user name if the user is logged in', () => {
  component.isLoggedIn = true
  fixture.detectChanges()
  const compiled = fixture.debugElement.nativeElement
  expect(compiled.querySelector('p')?.textContent).toContain(
    component.user.name
  )
})

it("shouldn't display the user name if the user is logged out", () => {
  fixture.detectChanges()
  const compiled = fixture.debugElement.nativeElement
  expect(compiled.querySelector('p')?.textContent).not.toContain(
    component.user.name
  )
})
```

---

### STEP 5: Simulate Asynchronous Tasks

#### Location: app/shared/data.service.ts File

- Create the shared folder and data.service.ts file

- Create a getDetails() method that returns a resolved promise after 1500ms

_RESULT_:

```typescript
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class DataService {
  getDetails() {
    const resultPromise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data')
      }, 1500)
    })
    return resultPromise
  }
}
```

#### Location: app/user/user.component.ts File

- Inject your data service

- Create a component variable "data!: string"

- In ngOnInit() create a promise that sets the dataService.getDetails() data to our local data variable.

_RESULT_:

```typescript
export class UserComponent implements OnInit {
  user!: { name: string }
  isLoggedIn = false
  data!: string

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user
    this.dataService.getDetails().then((data: string) => (this.data = data))
  }
}
```

#### Location: app/user/user.component.spec.ts File

- Create a test to check that we are only fetching our data asynchronously.

- Create a test to check that we are receiving the correct data with an asynchronous call.

- _Make sure you import {async} from "@angular/core/testing"_

_RESULT_:

```typescript
it("shouldn't fetch data successfully if not called asynchronously", () => {
  let dataService = fixture.debugElement.injector.get(DataService)
  fixture.detectChanges()
  expect(component.data).toBe(undefined!)
})

it('should fetch data successfully if called asynchronously', async(() => {
  let dataService = fixture.debugElement.injector.get(DataService)
  fixture.detectChanges()
  fixture.whenStable().then(() => {
    expect(component.data).toBe('Data')
  })
}))
```

---

### STEP 6: Isolated Tests

#### Location app/shared folder

- Create a reverse.pipe.ts file.

- Add your reverse pipe logic

_RESULT_:

```typescript
import { Pipe } from '@angular/core'

@Pipe({ name: 'reverse' })
export class ReversePipe {
  transform(value: string) {
    return value.split('').reverse().join('')
  }
}
```

#### Location: app/shared

- Create a reverse.pipe.spec.ts file.

- Add your reverse pipe testing logic

_RESULT_:

```typescript
import { ReversePipe } from './reverse.pipe'

describe('Pipe: ReversePipe', () => {
  it('should reverse the string', () => {
    let reversePipe = new ReversePipe()
    expect(reversePipe.transform('hello')).toEqual('olleh')
  })
})
```

---

---

## Additional Notes

### Resources

- [Angular Docs - Guide to Testing](https://angular.io/guide/testing)

- [Testing Components in Angular 2 w/ Jasmine](https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine)
