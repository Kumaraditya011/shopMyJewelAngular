import { Component } from '@angular/core';

@Component({
  selector: 'lib-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  socialMediaLinks = [
    { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { label: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { label: 'YouTube', icon: 'YouTube', url: 'https://youtube.com' }
  ]
}
