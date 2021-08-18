### Class 21 - Angular as a Platform & Closer Look at the CLI

#### Brief Lecture

** Outline **

- The impact the Angular CLI has in the development process
  - Easier time in publishing, deploying, and creating with your angular project.

######  Step 1: A closer look at "ng new"

    - "ng new" allows us to generate a new angular application
    - "ng new --help" allows us to see an overview of what we can do with ng new
      - go through these list of options
        - reference: https://angular.io/cli/new

  **Generate a new angular application to explore the config files**
  ```ng new angular-config```

###### Step 2: Understanding the Config Files
  - **Navigate to the .editorconfig file**
      - Explain .editorconfig
         - .editorconfig configures the code style and format of the project
  - **Navigate to the .gitignore file**
         - Explain .gitignore
            - .gitignore is a file that works with git. Git is a version control tool that helps you create code snapshots and go back to older code. Github is a service for git in which it stores this history. .gitignore ignores files so that it won't be seen in the repo. An example of this is can be ignoring a file that includes an API Key so that malicious hackers won't be able to abuse it.
  - **Navigate to the browserslistrc file**
         - Explain browserslistrc
            - browserslistrc tells the angular CLI what browsers you want to support.
            - The CLI will adjusts your css to support all these browsers.
            
              - Reason: Excluding browsers can lead to less code the user has to download

  - **Navigate to the karma.conf.js file**
         - Explain karma.conf.js
            - Allows you to configure the unit testing

  - **Navigate to the package.json file**
         - Explain package.json
            - A file that manages your packages your project uses and the versions of those packages
               - scripts
                    - scrips we can execute in the command line
              - dependencies 
                    - dependencies are third party packages used to build our applicaion 
              - devdependencies
                    - tools to build the application efficiency 
                        - angular cli
                        - karma
                        - typescript
          - to use the package.json file, you enter ```npm install`` in the command line
            - this will create a node_modules folder based on these dependencies
            - created a package-lock.json folder that stores exact versions of your third party depenencies

  - **Navigate to the tsconfig.json file**
         - Explain tsconfig.json
            - This configures the typescript compiler
            - Here, we can add strict mode
            

                ```
                  "compilerOptions"{
                    .
                    .
                    .
                    "strict":true
                    .
                    .
                    .
                  }
            ```
        - tsconfig.app.json file extends the configuration of the app and tsconfig.spec.json configures the testing for typescript

###### Step 3: Important CLI commands
  - ```ng help``` to learn about the cli commands 
  - ``` ng [command] help``` to learn more about the command 
      - Example: ```ng serve --help```
      - Example: ```ng generate --help```

###### Step 4: Important CLI commands
  - **navigate to the angular.json file**
    - explain angular.json
      - generated when you create an angular project
      - used by the cli behind the scenes
      - comes in a json format to store its information

        - The **$schema** is information the angular team provides.
        - **version** is the version of the file format.
        - The **newProjectRoot** is where projects are added. You can manage multiple angular applications with this config.
        - Under your project you have various of properties that configure your project
            - **projectType** signifies your application type, by default stays at application
            - **schematics** are used to customize the ng generate sub-commands
            - **root** tells the angular cli of what the root folder is
            - **sourceRoot** is where your source files are, and you can store this somewhere else besides src
            - **prefix** configure what you want to add in front of every component (example: app-navigation) 
            - **architect**  have different commands that can be configured
              - **build** builds the angular project
              - **outputPath** where the build is output to
              - **index** root enty file
              - **main** root entry file for the application
              - **polyfills** where the polyfills are managed
              - **assetts** which files should be copied over
              - **styles** global styles for the application
              - **scripts** javascript scripts you like to copy over
        - reference: https://angular.io/guide/workspace-config
            - **configurations** allows us to configure the production environment or other environments
              - **filereplacements** allows us to replace files that aren't in production to files that are used for production
                  - Reason: We may be using different api keys for both files

        - we can configure the serve, testing and the linting

###### Step 5: Angular CLI Schematics 
  - explain schematics
    - schematics are blue prints angular commands can pick up, something you like to add to your project (e.g update, generating a component or adding a third party library)
      - ```ng generate```
        - generate new "building block" (e.g. components)
        - you can also use custom "ng generate" schematics provided by third party libraries 
      - ```ng add```
        - add libraries & capabilities to a project
        - (OPTIONAL) add the angular material to showcase how your application updates after installation
          - reference: https://material.angular.io/guide/getting-started
          - command ```ng add @angular/material```
      - ```ng update```
        - updates project & libraries
        - you can specify what you like to update (e.g. ```ng update @angular/core @angular/cli```)
  - reference: https://angular.io/guide/schematics
    
    - explain builders
      -  With builders, you can build your application for different environments. Many angular commands that run a process on your code such as linting, building or testing use a cli builder that can optimize your code. You could supply a builder to perform an entirely new task, or to change which third-party tool is used by an existing command.

      - ```ng deploy``` can deploy your application and host it.
      - https://angular.io/guide/cli-builder

###### Step 6: Understanding "Differential Loading"
    - "In Angular CLI version 8 and higher, applications are built using differential loading, a strategy where the CLI builds two separate bundles as part of your deployed application.

        The first bundle contains modern ES2015 syntax, takes advantage of built-in support in modern browsers, ships less polyfills, and results in a smaller bundle size.

        The second bundle contains code in the old ES5 syntax, along with all necessary polyfills. This results in a larger bundle size, but supports older browsers.

        This strategy allows you to continue to build your web application to support multiple browsers, but only load the necessary code that the browser needs. "

    - reference: https://angular.io/guide/deployment

      - When you use the angular cli to generate a new app, it automatically includes a polyfill for you.
        - src/polyfills.ts

      - To see an example of an API that does not support old web browsers, check out the web animations api https://caniuse.com/web-animation
        - to allow old browser to support this api, we can install this polyfill npm install --save web-animations-js
        - navigate to the pollyfills.ts file and then uncomment the import statement for web-animations-js

###### Step 6: Managing Multiple Projects in One Folder
  - **navigate to the angular.json file**
    - explain the advantages to having multiple angular apps in one project
      - One is you do not have to run the time consuming npm install for every app.
      - The node_modules folder is shared with all the other apps saving disk space.
      - All the apps can be updated to the next version easily.
      - A single source-control repository (such as git).
    - Generate a project to manage multiple angular apps
       - you can generate one of two types: application or library
        - ```ng generate application [project_name]```
        - with the command 'application' it generates a new angular project and it's own designated configuration
        - you can serve the application
        - you can configure the application from the angular.json in the root folder under the project property

  - One can argue that this is a messy way of having multiple projects at once 
      - Lets reate a new angular application to organize multiple app folders.
         - create a brand new folder and open it in visual studio code,
         - type the command ```ng new [project_name] --create-application=false```
          - this will not create a brand new angular app by default
          - it gives us a folder without an app folder
          - enter the command ```ng generate application [app_name]```
          - this way, we can have multiple projects in one angular folder and it is cleaner.

  - Explain what an Angular library is when generated 
    - to create a library ```ng generate library [library_name]```
    - A library is meant to be shared accross multiple angular web applications
      - an example of an Angular library is Angular Material https://material.angular.io/
      - how to build a library, visit the docs https://angular.io/guide/creating-libraries

- Wrap-up
  - People refer to angular as a platform because it is more than a framework, the CLI provides extra tools and features. 


#### Course Wrap Up 

  - Congratulate students in complete the course 
    - Students now have the ability to create their own amazing project

  - Plans after the Video Course
    - Work on Code labs Portfolio
    - Finish up Portfolio - Mock Interview with Employee
    - Employer Project 
