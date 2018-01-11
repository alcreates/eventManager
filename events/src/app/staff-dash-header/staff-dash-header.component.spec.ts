import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashHeaderComponent } from './staff-dash-header.component';

describe('StaffDashHeaderComponent', () => {
  let component: StaffDashHeaderComponent;
  let fixture: ComponentFixture<StaffDashHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDashHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDashHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
