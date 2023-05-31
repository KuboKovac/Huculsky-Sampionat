import { TestBed } from '@angular/core/testing';

import { AdminRidersService } from './admin-riders.service';

describe('AdminRidersService', () => {
  let service: AdminRidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
