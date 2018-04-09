import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWeaponsComponent } from './table-weapons.component';

describe('TableWeaponsComponent', () => {
  let component: TableWeaponsComponent;
  let fixture: ComponentFixture<TableWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
