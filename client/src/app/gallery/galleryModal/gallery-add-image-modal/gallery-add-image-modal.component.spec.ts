import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAddImageModalComponent } from './gallery-add-image-modal.component';

describe('GalleryAddImageModalComponent', () => {
  let component: GalleryAddImageModalComponent;
  let fixture: ComponentFixture<GalleryAddImageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryAddImageModalComponent]
    });
    fixture = TestBed.createComponent(GalleryAddImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
