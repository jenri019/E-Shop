import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() name:string = "";
  @Input() price:number = 0;
  @Input() id:string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
