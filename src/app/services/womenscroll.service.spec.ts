import { TestBed } from '@angular/core/testing';

import { WomenscrollService } from './womenscroll.service';

describe('WomenscrollService', () => {
  let service: WomenscrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenscrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
