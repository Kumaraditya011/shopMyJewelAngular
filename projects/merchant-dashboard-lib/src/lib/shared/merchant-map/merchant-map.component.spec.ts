import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantMapComponent } from './merchant-map.component';

describe('MerchantMapComponent', () => {
  let component: MerchantMapComponent;
  let fixture: ComponentFixture<MerchantMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
