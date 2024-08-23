import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPaymentInfoComponent } from './confirm-payment-info.component';

describe('ConfirmPaymentInfoComponent', () => {
  let component: ConfirmPaymentInfoComponent;
  let fixture: ComponentFixture<ConfirmPaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPaymentInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
