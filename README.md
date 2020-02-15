# Web app for person management

This repository contains the web app for person management. You can create, update, view and delete person data using this web app. 

**NOTE :** Before running this web app, you need to run the **REST API** from the repository : <repository-link>

# How to run?

## Requirements

For building and running the web app you need:

- [Node 8.9.4](https://nodejs.org/download/release/v8.9.4)
- Npm 6.10.0

**NOTE :** Npm will be installed with Node. You can check the Node and Npm version in a console by **node -v** and **npm -v** respectively.

After that, execute below command in a console.
```shell
npm install -g @angular/cli@6.2.3
```

Execute **ng -v** and you should see below output.
```shell
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.2.9
Node: 8.9.4
OS: win32 x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.8.9
@angular-devkit/build-angular     0.8.9
@angular-devkit/build-optimizer   0.8.9
@angular-devkit/build-webpack     0.8.9
@angular-devkit/core              0.8.9
@angular-devkit/schematics        0.8.9
@angular/cli                      6.2.9
@ngtools/webpack                  6.2.9
@schematics/angular               0.8.9
@schematics/update                0.8.9
rxjs                              6.2.2
typescript                        2.9.2
webpack                           4.16.4
```

## Running

- First, clone this repository on your computer or download as a zip file.
```shell
url
```

- After that, open a console and change directory to project root and execute below command. This will install all the required node packages.

```shell
npm install
```

- After successful installation of node packages, run the web app by executing below command.
```shell
ng serve
```

You can access the web app by copying and pasting below URL in the browser.
```shell
http://localhost:4200
```
