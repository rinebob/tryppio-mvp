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




*/

// ====================================================
// commands to create project using angular cli:
// ====================================================
ng new tryppio-mvp --routing

// ====================================================
// commands to generate components using angular cli:
// ====================================================
// (wouldn't work without skip import option)
ng g c map-main --skip-import
ng g c view-main --skip-import
ng g c map-main/map --skip-import
ng g c map-main/edit-image --skip-import
ng g c map-main/locate-image --skip-import
ng g c view-main/view-image --skip-import
ng g c view-main/view-thumbs --skip-import

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
	<link href="/styles.css" rel="stylesheet" />
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
<main>
	<router-outlet></router-outlet>
</main>

// ====================================================
// app.module.ts
// ====================================================
// register new components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,

	],
	bootstrap: [ AppComponent ]

})

export class AppModule { }





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


