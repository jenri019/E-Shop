import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor() {
  }

  public _imgURL:string[] = [
    'https://images.pexels.com/photos/10013089/pexels-photo-10013089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/8567136/pexels-photo-8567136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/8128794/pexels-photo-8128794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4360501/pexels-photo-4360501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5200940/pexels-photo-5200940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/10290644/pexels-photo-10290644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8644153/pexels-photo-8644153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8929853/pexels-photo-8929853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ];

  ngOnInit(): void {
  }

  left() {
    let slider = document.getElementById("slider");
    let left = <number>slider?.scrollLeft;
    let width = <number>slider?.scrollWidth;
    
    if(left === 0){
      slider?.scrollTo(width,0);
    }else{
      slider?.scrollTo(left-width, 0);
    }
  }

  right() {
    let slider = document.getElementById("slider");
    let right = <number>slider?.scrollLeft;
    let div = <number>slider?.offsetWidth;
    let width = <number>slider?.scrollWidth;
    
    if(right < (width-div)){
      slider?.scrollTo(right+div, 0);
    }else{
      slider?.scrollTo(0, 0);
    }
  }

  setfull(position:number){
    let id:string = "img-"+position;
    <any>document.querySelector(".active")?.removeAttribute("class");
    (<HTMLImageElement>document.getElementById('large-img')).src = this._imgURL[position];
    document.getElementById(id)?.setAttribute("class","active");
    console.log("Imagen "+position);
  }

}
