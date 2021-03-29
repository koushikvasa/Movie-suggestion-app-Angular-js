import { TestBed } from '@angular/core/testing';

import { SuspenceService } from './suspence.service';

describe('SuspenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuspenceService = TestBed.get(SuspenceService);
    expect(service).toBeTruthy();
  });
});
