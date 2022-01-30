import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public productList:Product[] = this.productService.products;
  public pid:string = '';
  public existence:boolean = false;

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute) {
      this.pid = <string>this.route.snapshot.paramMap.get('productID');
      for(let i = 0; i < this.productList.length; i++){
        if(this.pid == this.productList[i].id){
          this.existence = true;
          this.productService.setIndice(i);
        }
      }
    }

  ngOnInit(): void {}

}
