# The Basics

### General Idea
Understanding the basic concepts of Angular such as: 
- Creating components from scratch
- Creating components with the CLI
- Styling Components
- Databinding
- Event Binding
- Two Way Binding
- Structural Directives 
- Attribute Directives

### Creating Component From Scratch

1. Add New Folder within App folder named 'apartment'
2. Add new file to 'apartment' folder named 'apartment.component.ts'
3. Export a class named 'ApartmentComponent'
4. Import 'Component' from '@angular/core'
5. Add '@Component' JavaScript Object
  1. selector: 'app-apartment',
  2. templateUrl: './apartment.component.html'
6. Ask why theres an error.
  1. Add the 'apartment.component.html' file to apartment folder
7. See if they know why there is still an error.
  1. Add the import and the declaration for the new component in the appModule
8. Put some dummy content within app.component.html and apartment.component.html
  1. A header in the app component saying 'App Component' and a paragraph for the apartment component saying 'Apartment Component'
9. Add an hr to the app component and below a selector tag for the apartment component.

### Creating Component with CLI

1. In CLI 'ng g c apartments'
2. Show that the imports were added in appModule
3. Put at least one selector tag in the apartments.component.html for the apartment component
4. Update appModule selctor tag for apartment component to the apartments selector tag.
5. Show the output.

### Styling Components

1. Add bootstrap container, row, then col-xs-12 around the content within the app.component.html
2. Save and ask if they know why nothing changed.
3. Solution:
  1. Install bootstrap with 'npm i bootstrap@4.6'
  2. Add in the style section of angular.json:
    1. "node_modules/bootstrap/dist/css/bootstrap.min.css"
4. Save again and show the changes

### Databinding

**Rundown**: You use databinding to specify things like image sources, state of a
button, or data for particular aspects of your app.

1. We want to output an apartment with an aprtment number and its availabilty
  1. Ex Output: Apartment 3206 Available
2. Add three variables to apartment.component.ts
  1. apartmentNumber = [A few random apartment numbers]
  2. apartmentNumberSelector = Math.floor(Math.random() * How many numbers you added)
  3. apartmentStatus = 'unavailable'
3. Add string interpolation with above example
  1. For apartment number: {{ apartmentNumber[apartmentNumberSelector] }}
  2. For apartmentState: {{ getApartmentStatus() }}
4. Make a method for 'getApartmentStatus(){}'
  1. Within method: return this.apartmentStatus
5. Add button in apartments.component.html that says 'Add Apartment'
  1. With class="btn btn-primary"
  2. And disable it
6. In apartments.component.ts add variable allowNewApartment = false;
7. Within the constructor add a setTimeout(() => {this.allowNewApartment = true}, 2000)
8. Add squared brackets to disabled property on the button
  1. Set equal to "!allowNewApartment"

### Event Binding

**Rundown**: You use event binding to respond to user actions (clicks, keystrokes, mouse movements, and touches).

1. Add variables to apartments.component.ts 
  1. apartmentCreated = false;
  2. apartmentCreationStatus = 'Apartment was not created!'
  2. apartmentName = "Random Apartment";
2. Add paragraph beneath button:
  1. {{ apartmentCreationStatus }}
3. In apartments.component.ts add 'onCreateApartment(){}'
  1. Within method set this.apartmentCreationStatus = this.apartmentName + 'was created!';
  2. Add (click) listener for above method to Add Server button
4. Create method onUpdateName with argument 'event: any' 
  1. Set this.apartmentName = (<HTMLInputElement>event.target).value
5. For apartment.component.html
  1. Add label for Apartment Name
  2. Add input element 
    1. type="text"
    2. class="form-control"
    3. (input)="onUpdateName($event
6. Show output
7. Comment out the input element for next section

### Two Way Binding

**Rundown**: You use two way binding to listen to events and update values simultaneously.

1. In appModule
  1. Import FormsModule from @angular/forms
  2. Add it in imports array
2. Replace commented input with another input with the same type and class
3. instead of (input):
  1. [(ngModel)]="apartmentName"
4. Show output

### Structural Directives

**Rundown(For all directives)**: Directives help add behavior in certain elements of your app.

1. Comment out paragraph that displays apartmentName
2. Add new paragraph tag that has an empty *ngIf=""
  1. Within tags add {{ apartmentName }} was created!
3. In onCreateApartment add:
  1. this.apartmentCreated = true
4. Add in the empty *ngIf:
  1. apartmentCreated
5. Show output

### Attribute Directives

1. Add a constructor to apartment.compontent.ts
  1. set this.apartmentStatus = Math.random() > 0.5 ? 'available' : 'unavailable'
2. In the apartment.component.html add:
  1. ngStyle with square brackets equal to "{backgroundColor: getColor()}"
3. Create get color method in apartment.component.ts
  1. In method return this.apartmentStatus === 'available' ? 'green' : 'red'
4. In the @Component of apartment.component.ts add:
  1. styles: [` .available { color: white; } `]
5. In the apartment.component.html paragraph add: 
 1. In square brackets: ngClass = "{available: apartmentStatus === 'avalable'}"
6. Show output

### Using ngFor (Another Structural Directive)

1. Add an array named apartments in apartments.component.ts
  1. Put to or more strings within that say anythin
2.  In apartments.component.html add to the 'app-apartment' tag
  1. *ngFor="let apts of apartments"
3. Show output.
