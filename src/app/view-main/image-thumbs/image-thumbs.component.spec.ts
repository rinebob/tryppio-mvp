import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageThumbsComponent } from './image-thumbs.component';

describe('ImageThumbsComponent', () => {
  let component: ImageThumbsComponent;
  let fixture: ComponentFixture<ImageThumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageThumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
