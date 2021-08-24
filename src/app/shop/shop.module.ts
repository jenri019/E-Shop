import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CardProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
