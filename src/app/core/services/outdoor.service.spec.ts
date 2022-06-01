import { TestBed } from '@angular/core/testing';

import { OutdoorService } from './outdoor.service';

describe('OutdoorService', () => {
  let service: OutdoorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutdoorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
