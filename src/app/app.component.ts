import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tryppio-mvp';

  ngOnInit() {
    this.title = "Yo dude it's a title of like an app or something..."
  }
}

