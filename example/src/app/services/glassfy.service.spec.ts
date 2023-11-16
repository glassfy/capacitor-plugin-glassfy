import { TestBed } from '@angular/core/testing';

import { GlassfyService } from './glassfy.service';

describe('GlassfyService', () => {
  let service: GlassfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlassfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
