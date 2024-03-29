import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompetitionsComponent } from './new-competitions.component';

describe('NewCompetitionsComponent', () => {
  let component: NewCompetitionsComponent;
  let fixture: ComponentFixture<NewCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompetitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
