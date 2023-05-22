import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinglinkUiLibComponent } from './pinglink-ui-lib.component';

describe('PinglinkUiLibComponent', () => {
  let component: PinglinkUiLibComponent;
  let fixture: ComponentFixture<PinglinkUiLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinglinkUiLibComponent]
    });
    fixture = TestBed.createComponent(PinglinkUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
