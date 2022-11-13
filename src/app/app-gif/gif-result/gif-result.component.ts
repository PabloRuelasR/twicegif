import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-result',
  templateUrl: './gif-result.component.html',
  styleUrls: ['./gif-result.component.css']
})
export class GifResultComponent  {

  constructor(private gifService : GifsService) { }

  get resultados(){
    return this.gifService.resultados;
  }

}
