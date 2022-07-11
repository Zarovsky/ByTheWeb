import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { ModalService } from 'src/app/modal.services';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  galeriaActual: Galeria | undefined;
  imagenes: Imagen[] = []; // las imágenes de la galeria
  abrirModal: boolean = false;
  imgDetalle!: Imagen;

  constructor(private activatedRoute: ActivatedRoute,
    private srv: GaleriasService, private vtnModal: ModalService) {
      this.srv.getGaleriaByDirectory(this.activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe(galeria => {
        if (galeria) {
            this.recargar(galeria);
          }
        });

     }

  ngOnInit(): void {
    this.vtnModal.$modal.subscribe((valor) => {
      this.abrirModal = valor;
    });

  }

    // si selecciona una galeria desde el autocomplete
    recargar(galeria: Galeria) {

      this.galeriaActual = galeria;
      // recuperar las imágenes  de esa galería
      this.getImagesGallery(this.galeriaActual.directorio_galeria);
  }

  verDetalle(imagen: any) {
    this.imgDetalle = imagen;
    this.abrirModal = true;
  }

  // cargamos las imágenes de la galería
  getImagesGallery(directorio: string) {
    this.imagenes = [];
    this.srv.getImagensByGallery(directorio).subscribe(imagenes => {
      this.imagenes = imagenes;
    });
  }

}
