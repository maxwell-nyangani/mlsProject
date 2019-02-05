import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidResultsComponent } from './paid-results.component';

describe('PaidResultsComponent', () => {
  let component: PaidResultsComponent;
  let fixture: ComponentFixture<PaidResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
