# Proleit2020

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.


## erstellt
ng new proleit2020 --prefix pl --style scss --routing 

- ng g m user --module app
- ng g c user/user --flat --export --skip-tests 
- ng g c user/userList --skip-tests  
- ng g c user/user-list/userListItem --skip-tests 
- ng generate interface user/user

## repository
https://github.com/netTrek/ng9.git

## Kontakt
- us@netTrek.de

## Aufgabe
- In das Utils Modul legen wir eine Directive ab (name: danger) - in eigenen Ordner
- ng g d utils/danger --skip-tests --export --flat false
- Directive soll nur auf <button> oder <a>
- Directive soll text fett darstellen und hintergrund rot
- Directive soll System um ein Ereignis Confirmed Bereichernt werden das Klick abh. ist
- Confirmed darf nur gefeuert werden, wenn der Benutzer eine Confirm Message zustimmt


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
