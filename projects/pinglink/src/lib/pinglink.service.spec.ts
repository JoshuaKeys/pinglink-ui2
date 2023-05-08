import { TestBed } from '@angular/core/testing';

import { PinglinkService } from './pinglink.service';

describe('PinglinkService', () => {
  let service: PinglinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinglinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
