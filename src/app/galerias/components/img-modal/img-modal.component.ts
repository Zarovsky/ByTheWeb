import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/modal.services';
import { Imagen } from '../../../interfaces/imagen-interface';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent  {

  @Input() imagen!: Imagen;
  constructor(private vntModal: ModalService) { }

  cerrarModal()
  {
    this.vntModal.$modal.emit(false);
  }

}
