import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MerchantMapComponent } from '../merchant-map/merchant-map.component';
import { PaginationComponent } from './pagination.component';



@NgModule({
  declarations: [
    PaginationComponent,
    MerchantMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    MerchantMapComponent
  ]
})
export class SharedModule { }
