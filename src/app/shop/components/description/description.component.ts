import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from '../../services/product.service';
import { Element } from '@angular/compiler';

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


  public display:boolean = true;
  
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

  displayDescription() {
    if(!this.display){
      document.getElementById('description-title')?.classList.remove('non-display');
      document.getElementById('features-title')?.classList.remove('display');
      document.getElementById('description')?.classList.remove('non-display');
      document.getElementById('features')?.classList.remove('display');
      document.getElementById('description-title')?.classList.add('display');
      document.getElementById('features-title')?.classList.add('non-display');
      document.getElementById('description')?.classList.add('display');
      document.getElementById('features')?.classList.add('non-display');
      this.display = true;
    }
  }

  displayFeatures() {
    if(this.display){
      document.getElementById('description-title')?.classList.remove('display');
      document.getElementById('features-title')?.classList.remove('non-display');
      document.getElementById('description')?.classList.remove('display');
      document.getElementById('features')?.classList.remove('non-display');
      document.getElementById('description-title')?.classList.add('non-display');
      document.getElementById('features-title')?.classList.add('display');
      document.getElementById('description')?.classList.add('non-display');
      document.getElementById('features')?.classList.add('display');
      this.display = false;
    }
  }
}