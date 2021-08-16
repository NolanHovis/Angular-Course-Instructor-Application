# Class 18 - Angular Universal

---

## What is Angular Universal? 
- You can prerender your app on the server for first load. Fixes slow-connections and search engine issues.

Inspect HTML
- When the browser loads an Angular app, it initally gets an HTML page with the app-root element that looks blank to a user, until our script tags change the page after they're loaded by the browser.
- The page will be blank until the JavaScript is downloaded. 
- Search engines see this blank page as well, which doesn't look good.

**Adding Angular Universal**
1. In your terminal, run the commmand `ng add @nguniversal/express-engine --clientProject [identifier *see below]` 
Identifier is found in your angular.json file, the first name inside the projects object, in our case "BookIt"
    * `npm i -g npm@6.14.13`
    * Using @angular/cli version 12.2.1, I ran `ng add @nguniversal/express-engine`

2. You can now run your app on a server, and prerender your page. 
    - Check that app.server.module.ts has ModuleMapLoaderModule imported and in the imports array.
        - If not, run `npm i --save @nguniversal/module-map-ngfactory-loader` in your terminal, then import it.

3. We need to avoid running auto-login in our app component when we preload our page on the server. Since localStorage is a browser only API, it would fail on the server. To fix this, we need to find out if the app is running on a server. 
    - In app.component.ts, import `Inject` and `PLATFORM_ID` from '@angular/core', and inject the ID value into a private property in our constructor.
        ```ts
             @Inject(PLATFORM_ID) private platformId
        ```
    - Import the `isPlatformBrowser` function from '@angular/common'
    - Wrap the dispatch function in an if statement, only calling it if `isPlatformBrowser(platformId)` returns true.
        ```ts
        if(isPlatformBrowser(this.platformId)){
            this.authService.autoLogin();
        }
        ```
4. In the terminal run `npm run build:ssr`

5. You will need to host that can execute node.js to run the `serve:ssr` command, but for now we'll run it in the terminal.

Show the code in the terminal, we can tell from our logging service that the code ran once on the server. Inspect the HTML on the server loaded page, note there are now elements inside the root element.  

** Adding Angular Universal with NestJS **

What is NestJS? 
- A server-side framework, which can be used with Angular to create a full stack application.

1. In the terminal, run `ng add @nestjs/ng-universal`
2. When prompted by the CLI, enter the application name, the name you see underneath projects in angular.json.
3. Repeat steps 2-5 in Adding Angular Universal.
