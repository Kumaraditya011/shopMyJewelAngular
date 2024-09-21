import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../../projects/merchant-dashboard-lib/src/lib/components/products/products.module').then(m => m.ProductsModule)
  },
  // {
  //   path: 'products',
  //   component: ProductsComponent
  // },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
