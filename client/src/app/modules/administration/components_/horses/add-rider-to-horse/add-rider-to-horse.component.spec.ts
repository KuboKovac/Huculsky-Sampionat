import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiderToHorseComponent } from './add-rider-to-horse.component';

describe('AddRiderToHorseComponent', () => {
  let component: AddRiderToHorseComponent;
  let fixture: ComponentFixture<AddRiderToHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiderToHorseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRiderToHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
