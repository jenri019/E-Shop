import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public product:Product[] = this.productService.selectedProduct;
  public features:any;
  public keys:string[] = [];
  public values:string[] = [];
  public description = "";
  

  constructor(private productService:ProductService)
  {
    this.description = this.product[0].description;
    this.features = this.product[0].features;

    for(let j = 0; j < this.features.length; j++) {
      for(let k in this.features[j]){
        this.keys.push(k);
        this.values.push(this.features[j][k]);
      }
    }
  }

  ngOnInit(): void {}
}