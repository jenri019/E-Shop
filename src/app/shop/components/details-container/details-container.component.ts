import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.css']
})
export class DetailsContainerComponent {

  public do:boolean = false;

  constructor() { }

  public ngOnInit(): void {
    const counter = timer(1500);
    counter.subscribe((n)=>{
      this.do = true;
    });
  }
}
