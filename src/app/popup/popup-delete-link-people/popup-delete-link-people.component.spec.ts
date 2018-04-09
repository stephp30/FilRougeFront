import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteLinkPeopleComponent } from './popup-delete-link-people.component';

describe('PopupDeleteLinkPeopleComponent', () => {
  let component: PopupDeleteLinkPeopleComponent;
  let fixture: ComponentFixture<PopupDeleteLinkPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDeleteLinkPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteLinkPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
