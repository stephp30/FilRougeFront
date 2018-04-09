import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatePeopleComponent } from './associate-people.component';

describe('AssociatePeopleComponent', () => {
  let component: AssociatePeopleComponent;
  let fixture: ComponentFixture<AssociatePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
