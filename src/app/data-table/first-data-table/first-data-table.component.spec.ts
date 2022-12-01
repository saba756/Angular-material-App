import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDataTableComponent } from './first-data-table.component';

describe('FirstDataTableComponent', () => {
  let component: FirstDataTableComponent;
  let fixture: ComponentFixture<FirstDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
