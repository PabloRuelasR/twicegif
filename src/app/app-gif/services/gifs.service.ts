import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerchGIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api: string = "Dgqy51ubc2bbFvz45JsfsUC2fJb38bIu";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { 
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    
    this.apiCall("Twice Kpop");
  }

  buscarGif(data: string) {

    data = data.toLocaleLowerCase();

    if (!this._historial.includes(data)) {
      this._historial.unshift(data);
      this._historial = this._historial.splice(0, 9);
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }

    this.apiCall(data);
  }

  apiCall(data: String){
    this.http.get<SerchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.api}&q=${data}&limit=20`)
      .subscribe((respo: SerchGIFResponse) => { console.log(respo.data); this.resultados = respo.data });
  }

}
