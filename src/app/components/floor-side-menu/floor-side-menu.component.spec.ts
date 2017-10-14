import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FloorSideMenuComponent} from './floor-side-menu.component';

describe('FloorSideMenuComponent', () => {
  let component: FloorSideMenuComponent;
  let fixture: ComponentFixture<FloorSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloorSideMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
