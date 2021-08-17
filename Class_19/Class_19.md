# Angular Anumations
<hr />

**Overview:** Angular Animations create movement in your html elements. The system is built on CSS, providing you with the ability to change multiple aspects of an element. These include size, color, shape, anything you can change in CSS, you can animate. 

**Adding Animations to App Module**
1. Import BrowserAnimationsModule from '@angular/platform-browser/animations'
2. Add BrowserAnimationsModule to imports array

**Using Animations in Component**
1. Import the basic functions( trigger, state, style, animate, transition, keyframes ) from '@angular/animations'
2. Then add an animations array in your @Component decorator

**Applying Animations to BookIt**
1. In the book-reults.component.ts
  1. Import basic component imports
  2. Add animations array 
  3. In array add the trigger for swoopIn
  4. Add the in state with a style that sets scale to 1 and opacity to 1
  5. Add a transition from void to anything('void => *') then show the alias for void to anything(':enter')
  6. place an array in the transition for the void style and the animation length.
    1. Void Style: scale = 0, opacity = 0
    2. Animation length: '2s ease-in'(ease in makes it start slower and gradually get faster)
2. In the book-result.component.html
  1. Add the following on the outer most div
  ```
  <div class="mb-3 row" *ngIf="libraryService.allBooks.length > 0" [@swoopIn]>
  ```
3. Refresh an d search for a book.
4. In the book-reults.component.ts
  1. Remove the style object from the transition array
  2. Remove the ease-in from the animate string
  3. After the animate string add the keyframes method with an array
  4. In the array add style objects(as many as you want) without an offset the keyframes styles will be equally spaced within the time if the animation
  5. Setting the offset on each style will give it more or less time to reach the next style.
  6. Keyframes ex.
  ```
  transition(':enter', [
        animate('1s', keyframes([
          style({
            transform: 'scale(0)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'scale(0.3)',
            opacity: 0.3,
            offset: 0.2
          }),
          style({
            transform: 'scale(0.6)',
            opacity: 0.6,
            offset: 0.4
          }),
          style({
            transform: 'scale(0.9)',
            opacity: 0.9,
            offset: 0.8
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
  ```
<hr />

# Service Workers and Offline Capabilities

1. In CLI run 'ng add @angular/pwa'
2. Your AppModule now has a service worker in the imports
3. There is new files (manifest.webmanifest, ngsw-config.json)
4. It also updatedd the package.json file
5. Run 'ng build --prod' in CLI
6. Install lightweight node server(if you have done max's course you already have) with 'npm install -g http-server'
7. cd into the generated folder
8. Run 'http-server'
9. visit localhost:8080 and refresh
10. In the application tab in dev tools you should see the ngsw service worker working
11. In the Application tab check offline mode
12. Clear cache and refresh
13. Go to library tab and search. You'll get an error.
14. In the network tab in dev tools you can see the errors. Our fetches arent working.
