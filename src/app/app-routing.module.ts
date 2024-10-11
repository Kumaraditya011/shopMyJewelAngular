import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from 'projects/merchant-dashboard-lib/src/lib/components/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  // {
  //   path: 'products',
  //   loadChildren: () => import('merchant-dashboard-lib').then(m => m.ProductsModule)
  // },
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: '**', redirectTo: 'products' }
  // { path: '**', redirectTo: 'products' }
  { path: 'edit-profile',
    component:EditProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
