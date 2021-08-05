# Class 8 - Changing Pages With Routing

---

## Class Outline

1. Add App Routing for base routes.
2. Re-Add Navigation to our app.
3. Add Child Routes for Bookshelf Component

---

---

## Routing Overview

- **SPA** (Single Page Application): Loads routes using javascript instead of sending a request to the server and receving back an HTML file. This allows for super fast loading, a persistant state across pages, and a more "app-like" feel.

- Every route needs a path and either a component to render or a redirect to a route that loads a component.

- Use the `<router-outlet></router-outlet>` tag to dynamically render the component we want based on the url path.

- To route between pages, use "routerLink" instead of "href" on anchor tags to prevent page reloading.

- On the routerLink, if you omit the preceding "/"... you are creating a relative route to the page you are currently on, while adding the slash creates an absolute path to the base url of your website.

- Dyamically set the active anchor tab in the navigation bar by setting "routerLinkActive" property to "active" on every item.

- You can navigate between pages programatically by using the built in "@angular/router" router.navigate() method.

- Add parameters to your route by adding the ":custom-slug" to the path variable. eg: { path: "/servers/:id" }, where id is whatever is passed in the url after /servers.

- We can get access to the data passed as the ":custom-slug" by using the snapshot.params object that is available by importing {ActivatedRoute} from "@angluar/router".

- Every link has a bindable property "[queryParams]" which allows you to send key value pairs through the url. This can also be done programatically. We retrieve this information similar to the last step.

- You can nest routers by adding a children property on the path that will hold all the child routes.

- To catch all routes that aren't covered by your app, add a new route at the end of your routes array with a path="\*\*" and redirect to whatever component you want (usually a not-found page).

- It is common practice to have an `app-routing.module.ts` file that loads all of your routes.

- To protect certain routes from being accessed by users without permision, create a AuthGaurd Class that implements Angluar router's "CanActivate" or "CanActivateChild".

- Keep user from accidently navigating away by using "CanDeactivate" Gaurd

---

---

## Project Steps

### STEP 1: Setting Up Our Basic Routes

#### Inside App folder

- CREATE: `app-routing.module.ts` file.

- ADD: appRoutes variable with our list of main routes (root, bookshelf, library).

- ADD: NgModule imports and exports.

_RESULT_:

```typescript
import { LibraryComponent } from './library/library.component'
import { BookshelfComponent } from './bookshelf/bookshelf.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  { path: 'bookshelf', component: BookshelfComponent },
  { path: 'library', component: LibraryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

#### Inside app.module.ts

- ADD: our `AppRoutingModule` to the `App.module.ts` imports.

#### Inside app.component.html & app.component.ts

- REPLACE: the bookshelf and library tags with `<router-outlet></router-outlet>`.

- REMOVE: the featureSelected property on the navigation tag and the onSelect() function in app.component.ts.

---

### STEP 2: Adding Navigation back to our App

#### Inside the app/shared/navigation HTML file

- REMOVE: click listeners and href attributes.

- ADD: routerLink attribute and point to "/bookshelf" and "/library" respectively.

- ADD: routerLinkActive="active" attribute on both links.

- REPLACE: the dropdown menu (settings anchor tag) href with a "cursor: pointer" styles attribute.

_RESULT_:

```typescript
<a class="navbar-brand brand" id="brand" routerLink="/bookshelf">BookIt</a>

    // . . .

<li class="nav-item">
    <a class="nav-link" routerLink="/bookshelf" routerLinkActive="active">Bookshelf</a>
</li>
<li class="nav-item">
    <a class="nav-link" routerLink="/library" routerLinkActive="active">Library</a>
</li>

    //   . . .

<a
    class="nav-link dropdown-toggle"
    style="cursor: pointer"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    [attr.aria-expanded]="show"
    (click)="show = !show"
    [class.show]="show"
>
Settings
</a>
```

#### Inside the app/shared/navigation TS file

- REMOVE: the eventEmitter Output and onSelect() function.

#### Inside the app/shared/book HTML file

- REMOVE: the href attribute on the anchor tag.

- ADD: a style attribute and add "cursor: pointer".

---

### STEP 3: Adding Child Routes

#### Inside the app/bookshelf folder

- ADD: a bookshelf home page by running `ng g c bookshelf/bookshelf-home`.

- ADD: an h3 tag inside the HTML saying "Please Select a Book!"

#### Inside app-routing.module.ts

- ADD: a children property to the bookshelf path.

- ADD: a route object for the bookshelf-home, book-details, and book-list.

#### Inside app/bookshelf HTML component

- ADD: `<router-outlet></router-outlet>` in place of the book-details and ng-template.

---

---

## Extra Resources

- [Angular Docs - Router Reference](https://angular.io/guide/router-reference)
- [Angular Docs - Common Routing Tasks](https://angular.io/guide/router)
- [Angular 12 Routing Tutorial App](https://www.positronx.io/angular-router-tutorial/)
