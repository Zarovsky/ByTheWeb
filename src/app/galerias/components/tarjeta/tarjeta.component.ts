import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Imagen } from '../../../interfaces/imagen-interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {

  @Output() onVerDetalle: EventEmitter<Imagen> = new EventEmitter();
  @Input() imagen!: Imagen;

  verDetalle(imagen: Imagen)
  {
    this.onVerDetalle.emit(imagen);
  }


}
