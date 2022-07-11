import { Component, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-select-galeria',
  templateUrl: './select-galeria.component.html',
  styles: [
  ]
})
export class SelectGaleriaComponent {

  galerias: Galeria[] = []; // son las galerias, como el menú
  termino : string = '';

  @Output() onCargarGaleria: EventEmitter<Galeria> = new EventEmitter();

  constructor(private srv: GaleriasService) {
            // recupero todas las galerías para que el usuario no deba ir al menú
            this.srv.getGalerias().subscribe(galerias => {
              this.galerias = galerias;
            });
  }

   // si selecciona una galeria desde el autocomplete
   opcionSeleccionada(galeria: MatAutocompleteSelectedEvent) {

    if (!galeria.option.value) {
      // mostrar un pop up sin cambiar el contenido actual
      // this.heroeSeleccionado = undefined;

      return;
    }

    // recuperamos qué galeria es ahora la actual. OJO, va por título
    const index = this.galerias.findIndex(value => value.directorio_galeria === galeria.option.value.directorio_galeria);
    if (index != -1 ) {
      this.onCargarGaleria.emit(this.galerias[index]);
      this.termino = this.galerias[index].titulo_galeria;
    }
  }

}
