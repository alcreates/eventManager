import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVenueDetailsComponent } from './customer-venue-details.component';

describe('CustomerVenueDetailsComponent', () => {
  let component: CustomerVenueDetailsComponent;
  let fixture: ComponentFixture<CustomerVenueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVenueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVenueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
