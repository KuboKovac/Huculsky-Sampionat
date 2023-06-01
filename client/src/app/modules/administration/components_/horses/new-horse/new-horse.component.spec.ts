import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHorseComponent } from './new-horse.component';

describe('NewHorseComponent', () => {
  let component: NewHorseComponent;
  let fixture: ComponentFixture<NewHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHorseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
