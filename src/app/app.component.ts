import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tryppio-mvp';
  direction = "row";

  ngOnInit() {
    this.title = "Yo dude it's a title of like an app or something..."
  }


  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) +1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']

// template:
  //   <app-header></app-header>
  //   <h1>Hello {{ title }}</h1>
  //   <div gdAreas=" content side">
  //     <div gdArea="content">
  //       Content
  //     </div>
  //     <div gdArea="side">
  //       Side
  //     </div>
  //   </div>

  //
