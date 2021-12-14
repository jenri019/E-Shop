import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CategoryComponent } from './components/category/category.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CardProductComponent,
    CategoryComponent,
    SliderComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbModule
  ],
  bootstrap: [
    SliderComponent
  ]
})
export class ShopModule { }
