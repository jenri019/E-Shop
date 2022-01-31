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
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DetailsContainerComponent } from './components/details-container/details-container.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CardProductComponent,
    CategoryComponent,
    SliderComponent,
    ProductComponent,
    ImageSliderComponent,
    DetailsContainerComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbModule,
    SharedModule
  ],
  bootstrap: [
    SliderComponent
  ],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
