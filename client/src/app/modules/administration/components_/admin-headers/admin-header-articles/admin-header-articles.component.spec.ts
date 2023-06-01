import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderArticlesComponent } from './admin-header-articles.component';

describe('AdminHeaderArticlesComponent', () => {
  let component: AdminHeaderArticlesComponent;
  let fixture: ComponentFixture<AdminHeaderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
