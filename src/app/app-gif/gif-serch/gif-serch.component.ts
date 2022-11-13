import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-serch',
  templateUrl: './gif-serch.component.html',
  styleUrls: ['./gif-serch.component.css']
})
export class GifSerchComponent{

  @ViewChild('txtserch') txtserch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){};

  buscar(){
    const value = this.txtserch.nativeElement.value;
    if (value.trim().length==0) {
      return;
    }
    this.gifsService.buscarGif(value);
    this.txtserch.nativeElement.value= '';
  }

}
