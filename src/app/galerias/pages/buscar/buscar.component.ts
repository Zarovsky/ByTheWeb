import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

/*
  buscando() {
    this.servicioHeroes
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opcionSeleccionada(galeria: MatAutocompleteSelectedEvent) {
    if (!galeria.option.value) {
      // mostrar un pop up sin cambiar el contenido actual
      // this.heroeSeleccionado = undefined;
      return;
    }

    // recuperamos qué galeria es ahora la actual. OJO, va por título
    const index = this.galerias.findIndex(value => value.titulo_galeria === galeria.option.value);
    console.log(index);
    if (index >= 0) {
      this.galeriaActual = this.galerias[index];
    } else {
      // mostrar un pop up sin cambiar el contenido actual
    }

    // comprobar que existe el valor introducido
    this.getImagesGal(this.galeriaActual.directorio_galeria);
  }
*/
}
