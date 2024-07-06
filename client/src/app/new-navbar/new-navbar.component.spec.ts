import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNavbarComponent } from './new-navbar.component';

describe('NewNavbarComponent', () => {
  let component: NewNavbarComponent;
  let fixture: ComponentFixture<NewNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNavbarComponent]
    });
    fixture = TestBed.createComponent(NewNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
