import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductsModule } from 'projects/merchant-dashboard-lib/src/lib/components/products/products.module';
import { EnvironmentService } from 'src/environments/environment.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IconService } from './core/services/icon.service';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

export function loadEnvConfig(environmentService: EnvironmentService): () => Promise<any> {
  return () => environmentService.loadEnvironmentConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    ProductsModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadEnvConfig,
      deps: [EnvironmentService],
      multi: true
    },
    MatIconRegistry,
    IconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
