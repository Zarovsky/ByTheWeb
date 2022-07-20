import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  galeriaActual!: Galeria;
  imagenes: Imagen[] = []; // las imágenes de la galeria
  abrirModal: boolean = false;
  imgDetalle!: Imagen;

  constructor(private activatedRoute: ActivatedRoute,
    // private vtnModal: ModalService,
    private srv: GaleriasService,) { }

  ngOnInit(): void {
    this.srv.getGaleriaByDirectory(this.activatedRoute.snapshot.paramMap.get('id')?.trim()!)
    .subscribe((galeria: Galeria) => {
      if (galeria) {
        // console.log(Array.isArray(galeria));
        if (Array.isArray(galeria))
        {
          galeria.forEach(item => this.galeriaActual = item);
        } 
        else 
        {
          this.galeriaActual = galeria;
        }
          this.getImagesGallery(this.galeriaActual.directorio_galeria);
        } 
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

  cerrarModal() {
    this.abrirModal = false;
  }

  // cargamos las imágenes de la galería
  getImagesGallery(directorio: string) {
    this.imagenes = [];
    this.srv.getImagensByGallery(directorio).subscribe(imagenes => {
      this.imagenes = imagenes;
    });
  }

}
