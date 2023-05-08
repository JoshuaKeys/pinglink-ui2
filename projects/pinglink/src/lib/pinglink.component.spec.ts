import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinglinkComponent } from './pinglink.component';

describe('PinglinkComponent', () => {
  let component: PinglinkComponent;
  let fixture: ComponentFixture<PinglinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinglinkComponent]
    });
    fixture = TestBed.createComponent(PinglinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
