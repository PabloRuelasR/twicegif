import { Component } from '@angular/core';
import { GifsService } from '../../app-gif/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private gifService:GifsService) { }

  get historial(){
    return [...this.gifService.historial];
  }

  buscar(data: string){
    this.gifService.buscarGif(data);
  }

}
