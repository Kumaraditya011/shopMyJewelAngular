import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('merchant-dashboard-lib').then(m => m.ProductsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('merchant-dashboard-lib').then(m => m.ProfileModule)
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
