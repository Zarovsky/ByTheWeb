import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { ModalService } from 'src/app/modal.services';
import { Galeria } from '../../../interfaces/galerias-inerfaces';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {

  termino:string = '';
  abrirModal: boolean = false;
  imgDetalle!: Imagen;
  galeriaActual!: Galeria;
  imagenes: Imagen[] = []; // las imágenes de la galeria
  galerias: Galeria[] = []; // son las galerias, como el menú

  constructor(
    private route: ActivatedRoute,
    private vtnModal: ModalService,
    private srv: GaleriasService
  ) {
    //this.route.params.subscribe(({ gallery }) => { this.getproducts(gallery); });


    // recupero la galería actual pasada por parámetro
    this.srv.getGaleriaById(
      this.route.snapshot.paramMap.get('id')!).subscribe(galeria => {
        this.galeriaActual = galeria;
      });
  }

  ngOnInit(): void {
    // recupero todas las galerías para que el usuario no deba ir al menú
    this.srv.getGalerias().subscribe(galerias => {

      this.galerias = galerias;
    });

  }

  // si selecciona una galeria desde el autocomplete
  opcionSeleccionada(galeria: MatAutocompleteSelectedEvent) {

    console.log(galeria.option.value);
    if (!galeria.option.value) {
      // mostrar un pop up sin cambiar el contenido actual
      // this.heroeSeleccionado = undefined;
      return;
    }

    // recuperamos qué galeria es ahora la actual. OJO, va por título
    const index = this.galerias.findIndex(value => value.titulo_galeria === galeria.option.value.titulo_galeria);
    if (index != -1 ) {
      this.galeriaActual = this.galerias[index];
      this.termino = this.galeriaActual.titulo_galeria;
    } else {
      // mostrar un pop up sin cambiar el contenido actual
    }

    // comprobar que existe el valor introducido
    this.getImagesGal(this.galeriaActual.directorio_galeria);
  }

  verDetalle(imagen: any) {
    this.imgDetalle = imagen;
    this.abrirModal = true;
  }

  // cargamos las imágenes de la galería
  getImagesGal(directorio: string): Imagen[] {
    return this.imagenes;
  }
}
