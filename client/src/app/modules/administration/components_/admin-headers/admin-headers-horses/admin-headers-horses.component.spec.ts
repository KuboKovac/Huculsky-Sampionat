import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadersHorsesComponent } from './admin-headers-horses.component';

describe('AdminHeadersHorsesComponent', () => {
  let component: AdminHeadersHorsesComponent;
  let fixture: ComponentFixture<AdminHeadersHorsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeadersHorsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeadersHorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
