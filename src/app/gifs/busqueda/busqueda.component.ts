import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; //el signo de exclamacion le estamos indicando que esa variable nunca va ser null
  
  constructor(private gifsService: GifsService){}
  
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }
}
