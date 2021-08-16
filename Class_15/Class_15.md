# Deploying Angular App with Heroku

1. Install latest angular cli and angular compiler cli
  In Terminal:
  ```zsh
  npm install @angular/cli@latest @angular/compiler-cli --save-dev
  ```

2. In your package.json file 
  1. Copy the following devDependencies to dependencies:
    ```
    "@angular/cli": "^12.2.1",
    "@angular/compiler-cli": "^12.1.5",
    "typescript": "~4.3.2"
    ```
  2. Add a heroku post build script by adding this under "scripts":
    ```
    "heroku-postbuild": "ng build --prod"
    ```
  3. Check your node and npm versions by running "node" or "npm" then "-v" 
  4. Once you have your versions add an engines list beneath devDependencies that looks like this:
    ```
    "engines": {
    "node": "your node version",
    "npm": "your npm version"
  }
    ```

3. Install the server to run the app with this command in terminal:
  ```zsh
  npm install express path --save
  ```
  This might not want to install correctly because of conflicting changes. You can overwrite them.

4. Create new file "server.js" in your BookIt folder. Paste this code into the file:
  ```
    //Install express server
    const express = require('express');
    const path = require('path');

    const app = express();

    // Serve only the static files form the dist directory
    app.use(express.static('./dist/angular-app-name'));

    app.get('/*', (req, res) =>
        res.sendFile('index.html', {root: 'dist/angular-app-name/'}),
    );

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);
  ```

5. In package.json change the start command to "node server.js"

6. Use the Github deployment method

7. Connect your github to heroku

8. Search for the repository

9. Then click connect and enable automatic deploys

10. Then click deploy.

<hr />

# Deploying App with Heroku For Multiple Folders

**Rundown**
The Github repository for our app has a folder that contains our notes and the BookIt project folder. Now when you try to deploy the app using Github on Heroku it wants to run the folder that contains the BookIt project folder. The main folder didn't have anything executable within it, which is the issue we were running into. 

1. Run npm i on the main folder "Angular-Course-Instructor-Application"
  - This will give you a package.json file
2. In this package.json file we have to run scripts that direct us to the BookIt project folder
```
"scripts": {
    "client": "cd BookIt && ng serve", 
    "server": "node server.js",
    "build": "cd BookIt && npm run build",
    "dev": "concurrently --kill-others-on-fail \"ng serve\"",
    "start": "node server.js",
    "heroku-postbuild": "cd BookIt && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
  }
```
3. These scripts are directing into the BookIt project folder before running the other commands commands to serve, run, build, etc.
4. Notice it also calls the server.js file. We will need to add that with the same content as the one above. We just have to change the routes.
```
app.use(express.static('BookIt/dist/BookIt'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'BookIt/dist/BookIt/'}),
);
```
5. We had to direct into the project folder then into distribution and the served app folder on both the static route and the root.