import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images:any[] = [
    {
      src:"https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg",
      title: "Offer",
      desc: "Hola, soy una descripcion"
    },
    {
      src:"https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg",
      title: "Offer No 2",
      desc: "Hola, yo tambien soy una descripcion"
    }
  ];

  constructor(private _config:NgbCarouselConfig  ) { }

  ngOnInit(): void {
  }

}
