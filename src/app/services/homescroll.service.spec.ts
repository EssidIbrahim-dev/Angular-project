import { TestBed } from '@angular/core/testing';

import { HomescrollService } from './homescroll.service';

describe('HomescrollService', () => {
  let service: HomescrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomescrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
