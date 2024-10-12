import { Component } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { Product, Tabs } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'lib-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalProducts: number = 0;
  paginatedProducts: Product[] = [];
  mapCenter = { lat: 40.748817, lng: -73.985428 };
  zoomLevel = 14;
  socialMediaLinks = [
    { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { label: 'Email', icon: 'email-sign', url: 'https://email.com' },
    { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { label: 'YouTube', icon: 'YouTube', url: 'https://youtube.com' },
  ];
  tabs: Tabs[] = [
    {
      label: 'Edit Profile',
      className: 'edit-profile'
    },
    {
      label: 'Product',
      className: 'product'
    },
    {
      label: 'Leads',
      className: 'leads'
    },
    {
      label: 'Subscription',
      className: 'subscription'
    },
    {
      label: 'Sponsored & Ads',
      className: 'sponsored&Ads'
    },
    {
      label: 'Upload product',
      className: 'upload-product'
    },
    {
      label: 'Gallery',
      className: 'gallery'
    },
  ];
  private unsubscribe$ = new Subject<void>();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductData()
      .pipe(
        map((data: Product[]) => data),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((data: Product[]) => {
        this.products = data;
        this.totalProducts = this.products.length;
        this.paginateProducts();
      });
  }

  switchTab(tab: Tabs) {
    console.log(tab);
  }

  paginateProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.paginateProducts(); // Update the products displayed based on the new page
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
