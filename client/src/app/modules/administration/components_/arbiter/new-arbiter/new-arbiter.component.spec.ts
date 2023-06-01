import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArbiterComponent } from './new-arbiter.component';

describe('NewArbiterComponent', () => {
  let component: NewArbiterComponent;
  let fixture: ComponentFixture<NewArbiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArbiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArbiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
