import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVenuesComponent } from './featured-venues.component';

describe('FeaturedVenuesComponent', () => {
  let component: FeaturedVenuesComponent;
  let fixture: ComponentFixture<FeaturedVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
