import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadersCompetionComponent } from './admin-headers-competion.component';

describe('AdminHeadersCompetionComponent', () => {
  let component: AdminHeadersCompetionComponent;
  let fixture: ComponentFixture<AdminHeadersCompetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeadersCompetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeadersCompetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
