import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  public _imgURL:String[] = [
    'https://images.pexels.com/photos/10013089/pexels-photo-10013089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/8567136/pexels-photo-8567136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ];

  get URL():String[] {
    return [...this._imgURL];
}

  ngOnInit(): void {
  }

}
