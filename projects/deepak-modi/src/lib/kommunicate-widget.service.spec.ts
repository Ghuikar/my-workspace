import { TestBed } from '@angular/core/testing';

import { KommunicateWidgetService } from './kommunicate-widget.service';

describe('KommunicateWidgetService', () => {
  let service: KommunicateWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KommunicateWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
