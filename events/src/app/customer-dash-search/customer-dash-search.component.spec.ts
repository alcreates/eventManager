import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashSearchComponent } from './customer-dash-search.component';

describe('CustomerDashSearchComponent', () => {
  let component: CustomerDashSearchComponent;
  let fixture: ComponentFixture<CustomerDashSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDashSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
