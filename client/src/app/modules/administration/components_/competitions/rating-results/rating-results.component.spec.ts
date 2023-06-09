import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingResultsComponent } from './rating-results.component';

describe('RatingResultsComponent', () => {
  let component: RatingResultsComponent;
  let fixture: ComponentFixture<RatingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
