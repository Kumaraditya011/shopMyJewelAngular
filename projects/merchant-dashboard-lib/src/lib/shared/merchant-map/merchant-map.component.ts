import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-merchant-map',
  templateUrl: './merchant-map.component.html',
  styleUrls: ['./merchant-map.component.css']
})
export class MerchantMapComponent {

  @Input() height: string = '300px';
  @Input() width: string = '100%';
  @Input() center = { lat: 0, lng: 0 }; // google.maps.LatLngLiteral
  @Input() zoom: number = 14;
  @Input() label: string = 'Location'; // Default label
}
