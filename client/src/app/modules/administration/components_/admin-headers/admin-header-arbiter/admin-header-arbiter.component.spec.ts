import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderArbiterComponent } from './admin-header-arbiter.component';

describe('AdminHeaderArbiterComponent', () => {
  let component: AdminHeaderArbiterComponent;
  let fixture: ComponentFixture<AdminHeaderArbiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderArbiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderArbiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
