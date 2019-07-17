import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLocateComponent } from './image-locate.component';

describe('ImageLocateComponent', () => {
  let component: ImageLocateComponent;
  let fixture: ComponentFixture<ImageLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
