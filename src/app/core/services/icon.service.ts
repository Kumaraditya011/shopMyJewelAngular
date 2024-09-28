import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { customIcons } from '../constant/custom-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  registerIcons(): void {
    customIcons.forEach(([iconName, iconPath]) => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(iconPath) // security risk
      );
    });
  }
}
