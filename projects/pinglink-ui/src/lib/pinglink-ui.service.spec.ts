import { TestBed } from '@angular/core/testing';

import { PinglinkUiService } from './pinglink-ui.service';

describe('PinglinkUiService', () => {
  let service: PinglinkUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinglinkUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
