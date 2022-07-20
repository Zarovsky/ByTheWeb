import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Imagen } from '../../../interfaces/imagen-interface';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent  {

  @Input() imagen!: Imagen;
  @Output()  onCerrar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  cerrarModal()
  {
     this.onCerrar.emit(false);
  }

}
