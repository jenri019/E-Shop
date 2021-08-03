import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNavComponent } from './simple-nav/simple-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SimpleNavComponent
  ],
  exports: [
    SimpleNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
