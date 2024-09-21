import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDashboardLibComponent } from './merchant-dashboard-lib.component';

describe('MerchantDashboardLibComponent', () => {
  let component: MerchantDashboardLibComponent;
  let fixture: ComponentFixture<MerchantDashboardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantDashboardLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantDashboardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
