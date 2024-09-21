import { TestBed } from '@angular/core/testing';

import { MerchantDashboardLibService } from './merchant-dashboard-lib.service';

describe('MerchantDashboardLibService', () => {
  let service: MerchantDashboardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantDashboardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
