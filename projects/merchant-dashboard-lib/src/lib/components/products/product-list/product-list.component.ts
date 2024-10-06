import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product!: Product;
}
