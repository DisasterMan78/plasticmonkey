# Plasticmonkey2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## The Story So Far

#### Basic install:
```$ npm install -g @angular/cli

$ npm new plasticmonkey

$ cd plasticmonkey```

#### Node config:
```$ echo node_modules >> .gitignore

$ echo npm-debug.log >> .gitignore

$ echo save=true >> .npmrc

$ echo save-exact=true >> .npmrc```

#### Commit node_modules to own git repo

What what whyyyy?

* NPM repo availability can be unreliable
* Updated packages can introduce regressions or cause conflicts
* I've already started this project from scratch due to being unable to build on a new machine
* Shrinkwrap is unreliable due to issues with 'extraneous' packages Shrinkwrap doesn't recognise from package.json - usually as they have been installed by other packages with post install hooks
* It's all covered quite well here - Konstantin came to the same conclusion and solution as me. It's not ideal, but neither are any of the alternatives: https://medium.com/@bestander_nz/my-node-modules-are-in-git-again-4fb18f5671a#.lvfki71a9

```$ cd node_modules

$ git init

$ git add -A

$ git commit -m "Initial commit of node_modules for plasticmonkey"

$ git remote add origin git@github.com:DisasterMan78/plasticmonkey-nodemodules.git

$ git push -u origin master```

And that's where we are with initial setup.

## What does this mean?

Should requirements change, and updates or additions to the Node setup are reflected in node_modules and should be pushed to the `plasticmonkey-nodemodules` github repo

Any modules added to package.json should be added with exact versions and versions should be updated as required.

I'd much rather be all loosey-goosey, using latest versions wherever possible, but a stable, reproducable application is more important.

## Next steps

Install Material Design for Angular - This is not being done with Angiular CLI Tools due to issues with missing node dependencies

---

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

