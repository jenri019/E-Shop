import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public products:Product[] = [];

  constructor(private productService:ProductService) {
    this.products = productService.products;
  }

  ngOnInit(): void {
  }

}
