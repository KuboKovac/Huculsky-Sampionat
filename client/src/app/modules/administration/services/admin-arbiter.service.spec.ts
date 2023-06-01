import { TestBed } from '@angular/core/testing';

import { AdminArbiterService } from './admin-arbiter.service';

describe('AdminArbiterService', () => {
  let service: AdminArbiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminArbiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
