import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuecardComponent } from './venuecard.component';

describe('VenuecardComponent', () => {
  let component: VenuecardComponent;
  let fixture: ComponentFixture<VenuecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
