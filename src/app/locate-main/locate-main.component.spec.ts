import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateMainComponent } from './locate-main.component';

describe('LocateMainComponent', () => {
  let component: LocateMainComponent;
  let fixture: ComponentFixture<LocateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
