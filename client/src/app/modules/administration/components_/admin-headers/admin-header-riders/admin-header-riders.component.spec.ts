import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderRidersComponent } from './admin-header-riders.component';

describe('AdminHeaderRidersComponent', () => {
  let component: AdminHeaderRidersComponent;
  let fixture: ComponentFixture<AdminHeaderRidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderRidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
