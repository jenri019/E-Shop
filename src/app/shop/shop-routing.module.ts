import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';

const routes:Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: ':productID',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
