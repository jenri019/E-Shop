import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public productList:Product[] = this.productService.products;
  public features:any;
  public keys:string[] = [];
  public values:string[] = [];
  public description = "";
  

  constructor(private productService:ProductService)
  {
    let index = productService.index;
    this.description = this.productList[index].description;
    this.features = this.productList[index].features;

    for(let j = 0; j < this.features.length; j++) {
      for(let k in this.features[j]){
        this.keys.push(k);
        this.values.push(this.features[j][k]);
      }
    }
  }

  ngOnInit(): void {}
}