import { Component, OnInit } from '@angular/core';

// import { Image } from '../shared/image.model';
import { IMAGES } from '../../assets/images';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images = Object.values(IMAGES);

  constructor() { }

  ngOnInit() {
  }

}
