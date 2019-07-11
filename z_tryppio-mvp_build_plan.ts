// ====================================================
// Bob Rinehart
// TRYPPIO.COM
// MVP Development Plan
// July 9, 2019
// ====================================================

// TABLE OF CONTENTS:
// APP DESCRIPTION / USE CASES
// USER TYPES
// PROJECT STATUS / EXISTING MODULES
// NEW MODULES / FUNCTIONALITY

// BUILD STEPS

// PROJECT CREATION
// APP.MODULE
// CLICKABLE PROTOTYPE
// UPLOAD IMAGE
// VIEW IMAGE
// EDIT IMAGE METADATA
// LOCATE IMAGE ON MAP

// ====================================================
// ====================================================
// ====================================================
//        STORY BOARDS - MVP ONLY
// ====================================================
// ====================================================
// ====================================================

/*
user navigates to URL www.tryppio.com
----------------
user is presented with:
----------------
MENU BAR COMPONENT at top of screen
GOOGLE MAP COMPONENT in main area
IMAGE LIST COMPONENT in right sidebar

MENU BAR COMPONENT options:
Upload - opens image picker.  when image(s) selected, navigate to VIEW IMAGE COMPONENT
View - navigate to VIEW IMAGE COMPONENT
Edit - navigate to EDIT IMAGE COMPONENT
Locate - navigate to LOCATE IMAGE COMPONENT

GOOGLE MAP COMPONENT in main area:
centered on location:
showing image icons at correct location for each image

IMAGE LIST COMPONENT in right sidebar:
displays collection of images as prepared by ngOnInit or user interaction with filter
collection consists of vertical list of material cards, one card per image with subset of associated data

----------------
possible user actions:
----------------
click on MENU option:

UPLOAD
VIEW
EDIT
LOCATE

- manipulate GOOGLE MAP display using map controls
zoom in/out
change map type
pan
etc.

- hover over icon to view IMAGE CARD COMPONENT
- click on icon to open IMAGE CARD COMPONENT

- use filter field to limit displayed images
- hover over image list record to animate corresponding map marker
- click on image in list to pop open corresponding image card in map

TASKS
x Create project
create menu bar component
create main-map component shell
create google map child-component shell
create image list child-component shell
create view-main component shell
create edit image child-comonent shell
create locate image child-component shell

Create clickable prototype
enable navigation via menu bar
	- open image picker then view-main component
	- open view-main image component
	- open edit child-component
	- open locate child-component

PROJECT APP DIRECTORY/COMPONENT STRUCTURE
src
  app
    core
    shared
    menu
		image-main component
			map child component
			edit child component
			locate child component
		view-main component
			image view component
			image thumb component


PROJECT HTML COMPONENT TAG NESTING

index.html
  app-root (app.component.html)
  app.component.html
    app-header
    router-outlet




*/

// ====================================================
// commands to create project using angular cli:
// ====================================================
ng new tryppio-mvp --routing

/*
in browser navigate to localhost:4200
angular start page is displayed

created github repo, added branches aa-develop and header

*/

// ====================================================
// Create Header Component using angular cli
// ====================================================

ng g c header

// ====================================================
// commands to generate other components using angular cli:
// ====================================================

// ng g c map-main --skip-import
// ng g c view-main --skip-import
// ng g c map-main/map --skip-import
// ng g c map-main/edit-image --skip-import
// ng g c map-main/locate-image --skip-import
// ng g c view-main/view-image --skip-import
// ng g c view-main/view-thumbs --skip-import

// ====================================================
// index.html
// ====================================================
// add code to index.html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Tryppio</title>
	<base href="/">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="Tryppio - Social Network for Travelers">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" >
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link type="text/css" href="/styles.css"/>
</head>
<body>

	<main class="container">
		<app-root>
			Loading...
		</app-root>
		<br /><br />
	</main>



<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
</body>
</html>


// ====================================================
// app.component.html
// ====================================================
// add tags for header component and router-outlet

<app-header></app-header>
<router-outlet></router-outlet>
// <main>
// </main>

// ====================================================
// Install Angular Material Component Library
// ====================================================
// see https://material.angular.io/guide/getting-started for instructions

// 1) install material, cdk and animations
ng add @angular/material

// theme = indigo pink
// added hammerjs support
// added browser animations

// 2) configure animations
// app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    ...,
    BrowserAnimationsModule
  ],
})

// 3) imported MatToolBarModule into app.module.ts as test
// 4) added theme indigo-pink.css
// styles.css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

// 5) hammer.js gesture support added automatically during ng add @angular/material
// for manual installation only:
npm install --save hammerjs
// src/main.ts
import 'hammerjs';

// 6) added Material Icons font to index.html
// index.html head section
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


// note: ng add @angular/material added lines to package.json:
"@angular/material": "^8.0.2",
"@angular/cdk": "~8.0.2",
"hammerjs": "^2.0.8",

// navigating to 4200 shows grey toolbar.  Adding color="primary" attribute to html tag changes to blue/white


// added remaining links to nav bar:
// Main Map, Upload, Edit, Locate with margin 1rem

// insert a spacer element between brand and nav links (ie span)
// use flexbox to make it expand so it pushes nav links to right


// copied angular-material.module.ts from tryppio to tryppio-mvp/src/app
// import angular-material.module.ts into app.module.ts
// this caused errors and didn't compile though
// so, imported MatToolbarmodule into app.module.ts

// app.module.ts
// import { AngularMaterialModule } from './angular-material.module';
// @NgModule({
//   imports: [
//     ...,
//     AngularMaterialModule
//   ],
// })


// ====================================================
// Header Component - Initial installation
// ====================================================
// header.component.html
<mat-toolbar color="primary">
  <span>
    <a routerLink="/">Tryppio</a>
  </span>
  <span class="spacer"></span>
  <ul>
    <li>
      <a mat-button >Main Map</a>
    </li>
    <li>
      <a mat-button >Upload</a>
    </li>
    <li>
      <a mat-button >Edit</a>
    </li>
    <li>
      <a mat-button >Locate</a>
    </li>
  </ul>
</mat-toolbar>

// header.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// header.component.css
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.spacer {
  flex: 1 1 auto;
}

a {
  text-decoration: none;
  color: white;
  margin: 0 1rem;
}


// ====================================================
// Header component add routing
// ====================================================
// added routerLink="/" directives to html
// map-main, upload-images, view-images, edit-images, locate-images

// header.component.html
<ul>
    <li>
      <a mat-button routerLink="/map-main">Main Map</a>
    </li>
    <li>
      <a mat-button routerLink="/upload-images">Upload</a>
    </li>
    <li>
      <a mat-button routerLink="/view-images">View</a>
    </li>
    <li>
      <a mat-button routerLink="/edit-images">Edit</a>
    </li>
    <li>
      <a mat-button routerLink="/locate-images">Locate</a>
    </li>
  </ul>

// app-routing.module.ts
// placeholder routes for when components are built
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'map-main', component: AppComponent },
  { path: 'upload-images', component: AppComponent },
  { path: 'view-images', component: AppComponent },
  { path: 'edit-images', component: AppComponent },
  { path: 'locate-images', component: AppComponent },
  { path: '**', component: AppComponent }
];

// note: this leads to two toolbars being displayed.  will fix soon

// ====================================================
// INSTALLING ANGULAR FLEX-LAYOUT
// ====================================================
// install via npm
npm i -s @angular/flex-layout

// import into app.module
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});


// ====================================================
// ADD MAP-MAIN COMPONENT
// ====================================================
// this is the container for map, edit and locate components with image-list component

// html split vertically 66% left side 33% right side
// https://github.com/angular/flex-layout/wiki/fxFlex-API

<div></div>





// left side switches between map, edit and locate components
// right side holds image-list component always
// on mobile layout is map above image-list component


// ====================================================
// ====================================================
// ====================================================
//        NEW FUNCTIONALITY
// ====================================================
// ====================================================
// ====================================================


// ====================================================
// PROJECT CREATION
// ====================================================

// ====================================================
// APP.MODULE
// ====================================================

// ====================================================
// CLICKABLE PROTOTYPE
// ====================================================

// ====================================================
// UPLOAD IMAGE
// ====================================================

// ====================================================
// VIEW IMAGE
// ====================================================

// ====================================================
// EDIT IMAGE METADATA
// ====================================================

// ====================================================
// LOCATE IMAGE ON MAP
// ====================================================


