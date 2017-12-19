import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashResultsComponent } from './customer-dash-results.component';

describe('CustomerDashResultsComponent', () => {
  let component: CustomerDashResultsComponent;
  let fixture: ComponentFixture<CustomerDashResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDashResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
