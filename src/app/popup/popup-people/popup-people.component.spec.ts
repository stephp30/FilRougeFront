import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPeopleComponent } from './popup-people.component';

describe('PopupPeopleComponent', () => {
  let component: PopupPeopleComponent;
  let fixture: ComponentFixture<PopupPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
