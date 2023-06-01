import { TestBed } from '@angular/core/testing';

import { AdminHorsesService } from './admin-horses.service';

describe('AdminHorsesService', () => {
  let service: AdminHorsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHorsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
