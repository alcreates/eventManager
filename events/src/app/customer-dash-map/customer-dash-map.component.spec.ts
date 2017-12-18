import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashMapComponent } from './customer-dash-map.component';

describe('CustomerDashMapComponent', () => {
  let component: CustomerDashMapComponent;
  let fixture: ComponentFixture<CustomerDashMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDashMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
