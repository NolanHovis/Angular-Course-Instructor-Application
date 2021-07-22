# Class 4 - Course Basics && Debugging

---

## Steps

### Planning the Application

**What are the features?**

![Site Features](./SiteFeatures.png)

**What is the Design/UI flow?**

![AuthDesign](./AuthDesign.png)

![BookshelfDesign](./BookshelfDesign.png)

![LibraryDesign](./LibraryDesign.png)

---

### Starting a New Project

```zsh
    ng new BookIt --no-strict

    npm install --save bootstrap@4
```

1. Import "node_modules/bootstrap/dist/css/bootstrap.min.css" in angular.json under "styles" tag.
2. Clear App component HTML.
3. Test For Bootstrap by adding a container div with a row and column with text inside.

```zsh
    ng serve
```

---

### Add Starting Components & File Structure

```zsh
    ng g c navigation --skip-tests=true

    ng g c bookshelf --skip-tests=true

    ng g c library --skip-tests=true
```

- Walk through the components.
- Make sure they are all uploaded in app.module.ts

```zsh
    ng g c bookshelf/book-list --skip-tests=true

    ng g c bookshelf/book-details --skip-tests=true

    ng g c shared/book --skip-test=true

    ng g c library/book-search --skip-tests=true

    ng g c library/book-results --skip-tests=true
```



- Add shared folder
- Add `<app-navigation></app-navigation>` to App Component HTML.

RESULT:
```html
<div class="container">
  <app-navigation></app-navigation>
</div>
```

---

### Displaying Your Components

__Inside App Component HTML__
- Add ```<app-bookshelf></app-bookshelf>``` && ```<app-library></app-library>```

RESULT: 
```html
<div class="container">
  <app-navigation></app-navigation>
  <div class="row app-row">
    <div class="col-md-10 mx-auto">
      <app-bookshelf></app-bookshelf>
      <hr />
      <app-library></app-library>
    </div>
  </div>
</div>
```

__Inside Bookshelf Component HTML__
- Add ```<app-book-list></app-book-list>``` && ```<app-book-details></app-book-details>```

RESULT: 
```html
<div class="row justify-content-between">
  <div class="col-md-6">
    <h1>My Saved Books</h1>
    <app-book-list></app-book-list>
  </div>
  <div class="col-md-5">
    <app-book-details></app-book-details>
  </div>
</div>
```

__Inside Library Component HTML__
- Add ```<app-book-search></app-book-search>``` && ```<app-book-results></app-book-results>```

RESULT: 
```html
<div class="row">
  <div class="col-md-6">
    <h1>API Library Results</h1>
  </div>
  <div class="col-md-6">
    <app-book-search></app-book-search>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <app-book-results></app-book-results>
  </div>
</div>
```

__Inside Bookshelf/Book-List Component HTML__
- Add 3 ```<app-book></app-book>``` Components.

RESULT: 
```html
<div class="row mb-3">
  <div class="col-md-12">
     <app-book></app-book>
     <app-book></app-book>
     <app-book></app-book>
  </div>
</div>
```

__Inside Library/Book-Results Component HTML__
- Add 3 ```<app-book></app-book>``` Components.

RESULT: 
```html
<div class="row mb-3">
  <div class="col-md-12">
     <app-book></app-book>
     <app-book></app-book>
     <app-book></app-book>
  </div>
</div>
```

---

### Adding Navigation to the App

__Inside Shared/Navigation Component HTML__
- Add Navbar, Collapse Menu, Links, and Dropdown Toggler.
- Make sure to add declarations in the typescript file for ```collapsed: boolean = true; show: boolean = false;```

RESULT:
```html
<nav class="navbar navbar-dark bg-dark navbar-expand-lg mb-4">
  <a class="navbar-brand brand" id="brand" href="#">BookIt</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarToggler"
    aria-label="Toggle navigation"
    aria-controls="navbarToggler"
    aria-expanded="false"
    (click)="collapsed = !collapsed"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div
    class="collapse navbar-collapse"
    id="navbarToggler"
    [class.collapse]="collapsed"
    (window:resize)="collapsed = true"
  >
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Bookshelf</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Library</a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          [attr.aria-expanded]="show"
          (click)="show = !show"
          [class.show]="show"
        >
          Settings
        </a>
        <div
          class="dropdown-menu"
          aria-labelledby="navbarDropdownMenuLink"
          [class.show]="show"
        >
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Fetch Data</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
```

---

### Adding the Book Model and Instantiations

- Create book.model.ts file as a class with a constructor.
- Add myBooks array in Book-List Component with the type Book[].
- Create a dummy book inside of the myBooks array using the "new" keyword.
- In the Book-List Component HTML file, add an ngFor loop to display all books in the myBooks array and a Add New Book Button.
- Test that this works by adding more books in the myBooks array.
- Add the Dynamic Title, Genre, and Image variables.

### Creating the Book Details

- Add rows for the title, author, genre, image, tags, and edit book button.

### Working on the Libary Page

- Copy over the book-list html and paste in the library/book-results html. _Be sure to mention DRY Coding and why we shouldn't have two components doing basically the same thing... and that we will eventually put this logic in the book component!!_
- Change into two rows if you have time... make sure to delete the "Add New Book Button".

### Debugging an Angular App

- Make sure they understand the importance of using the chrome developer tools console, reading error messages, using console.log and walking through their code line by line to "follow the logic".
- Show them how to debug using the browser sourcemaps / debugger tool (Source => Webpack => . => Src).

---

#### Extra Time

- Add Roboto Font.
- Split the Library Results into two columns / arrays
- Refactor the book.module.ts file to make it all happen in the constructor argument field.
- Add styles to navbar and container.
