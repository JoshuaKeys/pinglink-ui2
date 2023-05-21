import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinglinkUiComponent } from './pinglink-ui.component';

describe('PinglinkUiComponent', () => {
  let component: PinglinkUiComponent;
  let fixture: ComponentFixture<PinglinkUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinglinkUiComponent]
    });
    fixture = TestBed.createComponent(PinglinkUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
