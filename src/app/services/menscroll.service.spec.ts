import { TestBed } from '@angular/core/testing';

import { MenscrollService } from './menscroll.service';

describe('MenscrollService', () => {
  let service: MenscrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenscrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
