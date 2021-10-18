# Adding Forms to BookIt
<hr />

**Goal:**  We will be adding a form into BookIt that will allow us to add a new book or edit an existing book and validate the data.
<hr>

**Adding Form in HTML**
1. Remove what is already in the bookshelf-editor.component.html
2. Create a form
3. Within the form add a div with the class form-group
   ```html
    <form>
      <div class="form-group"> </div>
    <form>
   ```
4. Inside the form group classes we add an input for the title of the book.
   ```html
    <form>
      <div class="form-group"> 
        <label for="title">Book Title</label>
        <input type="text" id="title" class="form-control" />
      </div>
    <form>
   ```
5. Copy the entire form-group for the title and paste it below for the author input and the price input. Don't forget to replace the title specific properties to author
   ```html
    <form>
      <div class="form-group"> 
        <label for="title">Book Title</label>
        <input type="text" id="title" class="form-control" />
      </div>
      <div class="form-group"> 
        <label for="author">Author</label>
        <input type="text" id="author" class="form-control" />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          id="price"
          class="form-control">
      </div>
    <form>
   ```
6. Add another form group div below author for the genre
  - Add a label for genre
  - Beneath the label add a select with class form-control and id genre.
  - Insde the select tag place a default option that says "Select a Genre"
  - In the option start tag add "disabled selected value" (this makes sure that you can't select this and that it has no value)
  - Then add a few more options with a book genre(Mystery, Science, Fiction, Non-Fiction, etc)
  - Make sure you make the value the name of the genre(case sensitive)
    ```html
    <div class="form-group">
      <label for="title">Book Title</label>
      <input
        type="text"
        id="title"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input
        type="text"
        id="author"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input
        type="number"
        id="price"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="genre">Genre</label>
      <select class="form-control" id="genre" formControlName="genre">
        <option disabled selected value>Select a Genre</option>
        <option value="Mystery">Mystery</option>
        <option value="Science">Science</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Fiction">Fiction</option>
      </select>
    </div>
    ```
7. Add another form group 
  - A label for "Image Path"
  - A text input id coverImagePath and class form-control
8. Add a row and full width column
  - Add img tag with class of img-responsive
    ```html
    <div class="form-group">
      <label for="coverImagePath">Image Path</label>
      <input
        type="text"
        id="coverImagePath"
        class="form-control">
    </div>
    <div class="row">
      <div class="col-xs-12">
        <img [src]="bookForm.value['coverImagePath']" alt="" class="img-responsive">
      </div>
    </div>
    ```
  - Add two buttons. A save of type submit and a cancel of type button  
    ```html
    <button type="submit" class="btn btn-success">Save</button>
    <button type="button" class="btn btn-danger">Cancel</button>
    ```

**Making the Form Work Dynamically** 
1. In bookshelf-editor.component.ts add a private method called initForm and add a reference to the bookshelfService
  ```typescript
  export class BookshelfEditorComponent implements OnInit{
    constructor(private bookshelfService: BookshelfService) {}
    .
    .
    .
    private initForm() {}
  }

  ```
2. Add a property called bookForm of type FormGroup(import from @angular/forms)
   
3. inside your method set bookForm to new FormGroup
  1. FormGroup takes a JS object to create the form values.
  2. Add FormControl elements for each book element(import from @angular/forms)
  3. ex . 'title': new FormControl()
4. To determine if the user is in edit mode and apply values if so:
  4. Add variables with let for each aspect of the book(title, author, genre, image)
  5. Set them all equal to empty strings
5. Add an if statement checking for isEditmode to be true
  6. if it is true set a constant named book to call the get book method in the bookshelf service.
  7. set all your variables you created eqaul to the the corresponding book element.
    1. ex. bookTitle = book.title
6. In your FormControl() add the corresponding elements onto the parenthesis
  8. ex. 'title': new FormControl(bookTitle)
7. Call the private method in ngOnInit after the isEditMode params are set.

**Adding Validation** 
1. In the book-editor.component.ts
 1. import Validators(import from @angular/forms)
 2. After the FormControl argument addd your validators.
  1. ex. 'title': new FormControl(bookTitle, Validators.required)
2. In the book-editor.component.css
  1. Add input.ng-invalid.ng-touched and select.ng-invalid.ng-touched
    1. In that add a 1px solid rgba(255, 0, 0, 0.464) border

**Connecting the TypeScript with the HTML** 
1. In the app.module.ts add into your imports the FormsModule and ReactiveFormsModule(import from @angular/forms)
2. In your book-editor.component.html 
  1. Add \[formGroup]="bookForm" and (ngSubmit)="onSubmit() to the form element
  2. To your input elements add the directive formControlName set it equal to the corresponding FormControls in your ts file
    1. ex. formControlName="title"
    2. Add the same for the select element

**Submitting the Form**
2. In the book-editor.component.ts
  1. Add the onSubmit method
  2. Add the logic as follows
  ```
  if (this.isEditMode) {
      this.bookshelfService.updateBook(this.id, this.bookForm.value)
    }
    else {
      this.bookshelfService.addBook(this.bookForm.value)
    }
  ```
3. In the bookshelf.service.ts
  1. Add a booksChanged subject of type Book[] 
  2. Add an addBook method
    1. Pass a book of type Book
    2. Push up the book to the myBooks array
  3. Add method for updateRecipe
    1. pass index of type number and updatedBook of type Book
    2. Apply this logic to change the specific book's elements
    ```
    this.myBooks[index] = updatedBook
    ```

**Adding CRUD**
1. In the book-details.component.ts 
  1. Add onDelete book method and call the removeBook from bookshelfService and pass this.id
  2. User the router to navigate back one level
   ```
  this.router.navigate(['../'], {relativeTo: this.route})
  ```
2. In the book-details.component.html 
 1. Add a click listener to the delete button
3. In the book-editor.component.html
  1. add a click listener to the cancel button for onCancel()
4. In the book-editor.component.ts 
  1. Add into the constructor private router: Router
  2. Add the onCancel method and navigate back one level
  3. Add a call to onCancel in the onSubmit method as well.

<hr />

# Using Pipes to Transform Output

**Goal:** To learn more about pipes and transforming your data with them.

**OverView:** Pipes are used to format data. You can use them to format dates, titles, strings, etc. You can also create you rown custom pipes.

**Adding a Price and Formatting with Pipes**
1. in the book model add a price as type number.
2. in the book.component.html add two paragraphs the same as the genre paragraph for the author and the price.
3. Add price values to the myBooks and the allBooks array
4. In the form we just created add another input like the author and title inputs for the price
```
<div class="form-group">
    <label for="price">Price
    <input
      type="number"
      id="price"
      formControlName="price"
      class="form-control">
</div>
```
5. In the bookshelf-editor.component.ts file add the following
  1. Add a bookPrice variable set to 0
  2. Set the bookPrice equal to book.price
  3. Add price form control and make it required.
6. Go back to your book.component.html file
  1. Where you use string interpolation for price add a pipe symbol "|" and then currency
  2. ex. {{ book.price | currency }}
  3. To format to different currencies:
    1. {{ book.price | currency: 'CAD' }}
    2. YOu can look up different currency abbreviations and use them as well.

**Creating Custom Pipe**
1. Create new pipe file in app folder(sort.pipe.ts)'
2. Import Pipe and PipeTransform from angular core
3. Give it a Pipe decorator with the name sort
4. export class named SortPipe that implements PipeTransform
5. make a transform method
  1. Give it two arguments:
    1. array of type any
    2. field of type any
  2. The array argument receives an array
  3. The field will determine what feild from the array we sort by
  4. we are going to use the sort method on the array like so 
  ```
    transform(array: any, field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      }
      else if (a[field] > b[field]) {
        return 1;
      }
      else {
        return 0;
      }
    })
    return array
  }
  ```
6. This takes the field's value to check the parameters we set and send it either up or down based on a nmber or a string.
7. This allows us to set things in alphabetical order

**Using the Pipe** 
1. Import the pipe from its location in the app.module.ts
2. Add it to the declarations
3. In the book-list.component.ts
  1. Add two properties: sortSwitcher = true, and sortField = 'author
  2. Add an onSort method that looks like this
  ```
    onSort() {
    this.sortSwitcher = !this.sortSwitcher;
    if (this.sortSwitcher === true) {
      this.sortField = 'author'
    }
    else {
      this.sortField = 'title'
    }
  }
  ```
  3. This lets us toggle the text on the button and the field we will sort by
4. In the book-list.component.html
  1. In the ngFor add:
  ```
  <div class="col-md-12" *ngFor="let bookEl of myBooks | sort:sortField; let i = index">
  ```
  2. Add another button in the same row as the other that looks like this:
  ```
  <button class="btn btn-primary" (click)="onSort()">Sort By {{ sortField | titlecase }}</button>
  ```
5. What we are doing here is setting the sort pipe on the myBooks array and then adding the feild param to the sort, which chooses which aspect of the array we will sort by. The button is toggling the the value of the sort field so we can change the feild from sorting alphabetically by author or title.



