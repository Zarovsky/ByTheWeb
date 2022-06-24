import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interfaces/imagen-interface';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  imagenes: Imagen[] = []; // las imágenes de la galeria

  constructor() { }

  ngOnInit(): void {
  }

  opcionSeleccionada(termino: string) {

    console.log(termino);
    if (!termino) {
      // mostrar un pop up sin cambiar el contenido actual
      // this.heroeSeleccionado = undefined;
      return;
    }
  }

}
