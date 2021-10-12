import { TestBed } from '@angular/core/testing';

import { ConseillereGuard } from './conseillere.guard';

describe('ConseillereGuard', () => {
  let guard: ConseillereGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConseillereGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
