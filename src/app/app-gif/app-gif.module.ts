import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { GifSerchComponent } from './gif-serch/gif-serch.component';
import { GifResultComponent } from './gif-result/gif-result.component';



@NgModule({
  declarations: [
    GifPageComponent,
    GifSerchComponent,
    GifResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifPageComponent
  ]
})
export class AppGifModule { }
