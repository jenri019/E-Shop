import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-buy-options',
  templateUrl: './buy-options.component.html',
  styleUrls: ['./buy-options.component.css']
})
export class BuyOptionsComponent implements OnInit {
  public name = "";
  public price = 0;
  public disponibility = false;
  public stock = 0;

  constructor(private productService:ProductService) {
    this.name = productService.selectedProduct[0].name;
    this.price = productService.selectedProduct[0].price;
    this.stock = productService.selectedProduct[0].stock;
    if(this.stock > 0) {
      this.disponibility = true;
    }
  }

  ngOnInit(): void {
  }

}
