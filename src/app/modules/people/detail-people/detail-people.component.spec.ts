import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeopleComponent } from './detail-people.component';

describe('DetailPeopleComponent', () => {
  let component: DetailPeopleComponent;
  let fixture: ComponentFixture<DetailPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
