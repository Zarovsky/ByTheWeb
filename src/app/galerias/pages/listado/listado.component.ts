import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { ModalService } from 'src/app/modal.services';
import { galeria } from '../../../interfaces/galerias-inerfaces';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  abrirModal: boolean = false;
  imgDetalle!: Imagen;
  galeriaActual: galeria;
  imagenes: Imagen[] = [];   // las imágenes de la galeria
  galerias: galeria[] = [];  // son las galerias, como el menú

  constructor(private route: ActivatedRoute,private vtnModal: ModalService, private srv: GaleriasService) {
    //this.route.params.subscribe(({ gallery }) => { this.getproducts(gallery); });
    // me cargo todas las galerías para montar un menú o algo y el user no tenga que estar yendo al menú Home
    this.galerias = this.srv.getGalerias(); // pillamos todas
    // podría buscarno en el arreglo anterior pero queda así más limpio
    this.galeriaActual = this.srv.getgaleriaById(this.route.snapshot.paramMap.get('id')!);

  }

  ngOnInit(): void {



  }

  verDetalle(imagen: any)
  {
    this.imgDetalle = imagen;
    this.abrirModal = true;
  }

}
