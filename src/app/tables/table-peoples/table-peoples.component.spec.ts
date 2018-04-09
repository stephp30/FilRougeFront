import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePeoplesComponent } from './table-peoples.component';

describe('TablePeoplesComponent', () => {
  let component: TablePeoplesComponent;
  let fixture: ComponentFixture<TablePeoplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePeoplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
