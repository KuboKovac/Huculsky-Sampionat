import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHorseToRiderComponent } from './remove-horse-to-rider.component';

describe('RemoveHorseToRiderComponent', () => {
  let component: RemoveHorseToRiderComponent;
  let fixture: ComponentFixture<RemoveHorseToRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveHorseToRiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveHorseToRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
