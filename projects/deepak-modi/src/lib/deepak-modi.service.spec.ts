import { TestBed } from '@angular/core/testing';

import { DeepakModiService } from './deepak-modi.service';

describe('DeepakModiService', () => {
  let service: DeepakModiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepakModiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
