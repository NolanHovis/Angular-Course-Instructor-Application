# Getting Started

### Angular Setup & First App


1. Open Terminal(Mac) or Command Prompt (Windows) 

2.  Windows:
    ``` 
    npm install -g @angular/cli@latest
    ```
    Mac:
    ```
    sudo npm install -g @angular/cli@latest
    ```

3. CD into folder you want to create the project in and run:

   ``` ng new my-first-app --no-strict```

    No routing. Use standard CSS.

  Jasmine Error? ```
    - Change "jasmine-core" 3.7.1 and "karma-jasmine-html-reporter" to 1.6.0 and save it. Then go back to Terminal and go to your project and run npm install --force. Now it works and you can run ng serve.
```

4. cd my-first-app (or your project name)

5. Run ``` ng serve ``` to start development server and open in the browser.

6. Replace app.component.html with the one provided by in the course.


### Editing The First App

1. Open the folder in VSCode

2. Open app.component.html and compare template to what is rendered in the browser.

3. Advise students to keep server running during development. Demonstrate CTRL+C and restart server in IDE.

4. Demonstrate live changes to template and title variable.

5. Inspect app HTML in browser and show how app-root is rendered. 

6. Delete code in app.component.html and replace with: ```
      <input type='text' />
      <p>{{ name }}</p>
      ```
      Change title to name, and value to your name.

7. Add ngModel directive to input: Do they remember what directives allow us to do?
 ``` [(ngModel)]="name" ```

8. Show console error and add  FormsModule to imports array in app.module.ts.

9. Type in to input to show changes

### The Course Structure

  Getting Started - Building and Editing the First App
  
  The Basics - What are components? Two-Way Data Binding?
  
  Components and Databinding - THe components that make up Angular apps. Output data to the DOM and react to user events.
  
  Directives: Built-in; e.x. ngModel (two-way databinding) and building your own directives.
  
  Services & Dependency Injection -  Single source of truth. Manage application state. Centralize code and allow communication between different parts of the app. 

  Routing - URL management. While we're not really switching pages, it will appear so to the user.

  Observables - Concept allowing you to work with async code. Update components when changes happen.

  Forms -  HAndling forms and user input is needed in many applications. We'll see how Angular can help us with this.

  Pipes - Transforming output, what is displayed on the template at runtime. 

  Http - Angular cannot connect to a database directly. However it can connect to a server that can.

  Authentication - What does authentication mean in an Angular app? How does it work?

