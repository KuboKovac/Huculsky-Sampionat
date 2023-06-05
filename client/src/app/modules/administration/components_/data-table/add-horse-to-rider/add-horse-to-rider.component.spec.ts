import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHorseToRiderComponent } from './add-horse-to-rider.component';

describe('AddHorseToRiderComponent', () => {
  let component: AddHorseToRiderComponent;
  let fixture: ComponentFixture<AddHorseToRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHorseToRiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHorseToRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
