import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { ModalService } from 'src/app/modal.services';
import { Galeria } from '../../../interfaces/galerias-inerfaces';
import { GaleriasService } from '../../services/galerias.service';
import { switchMap } from 'rxjs/operators';

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
    private activatedRoute: ActivatedRoute,
    private vtnModal: ModalService,
    private srv: GaleriasService,
  ) {
    //this.route.params.subscribe(({ gallery }) => { this.getproducts(gallery); });
    // recupero la galería actual pasada por parámetro

  }

  ngOnInit(): void {

console.log(this.activatedRoute.snapshot.paramMap.get('id'));

let parametro = this.activatedRoute.snapshot.paramMap.get('id');

/*
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.srv.getGaleriaByTitle(id)))
    .subscribe(galeria => {
      console.log('galeria que llega ' + galeria);
      this.galeriaActual = galeria;
    });
  */

    this.srv.getGaleriaByDirectory(parametro!)
    .subscribe(resp => {
        console.log('galeria parametro ' + parametro);
        if (resp) {

          this.galeriaActual = resp;
          console.log('galeria que recibo ' + this.galeriaActual.titulo_galeria);
        } else { return; }
      });

    // recupero todas las galerías para que el usuario no deba ir al menú
    this.srv.getGalerias().subscribe(galerias => {
      this.galerias = galerias;
    });

  }

  // si selecciona una galeria desde el autocomplete
  opcionSeleccionada(galeria: MatAutocompleteSelectedEvent) {

    console.log('selecciono: ' + galeria.option.value.directorio_galeria);
    if (!galeria.option.value) {
      // mostrar un pop up sin cambiar el contenido actual
      // this.heroeSeleccionado = undefined;

      return;
    }

    // recuperamos qué galeria es ahora la actual. OJO, va por título
    const index = this.galerias.findIndex(value => value.directorio_galeria === galeria.option.value.directorio_galeria);
    console.log(index);
    if (index != -1 ) {
      this.galeriaActual = this.galerias[index];
      console.log(this.galeriaActual.directorio_galeria);
      // recuperar las imágenes  de esa galería
      this.getImagesGallery(this.galeriaActual.directorio_galeria);
    } else {
      // mostrar un pop up sin cambiar el contenido actual
      this.termino = galeria.option.value.titulo_galeria;
    }
  }

  verDetalle(imagen: any) {
    this.imgDetalle = imagen;
    this.abrirModal = true;
  }

  // cargamos las imágenes de la galería
  getImagesGallery(directorio: string) {
    this.imagenes = [];
    this.srv.getImagensByDirectory(directorio).subscribe(imagenes => {
      this.imagenes = imagenes;
    });
  }

}
