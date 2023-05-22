import { TestBed } from '@angular/core/testing';

import { PinglinkUiLibService } from './pinglink-ui-lib.service';

describe('PinglinkUiLibService', () => {
  let service: PinglinkUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinglinkUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
