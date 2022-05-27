import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/interfaces/imagen-interface';
import { ModalService } from 'src/app/modal.services';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  abrirModal: boolean = false;
  imgDetalle!: Imagen;
  galeriaActual: string = '';
  imagenes: Imagen[] = [];

  constructor(private route: ActivatedRoute,private vtnModal: ModalService) {
    //this.route.params.subscribe(({ gallery }) => { this.getproducts(gallery); });
    // otra forma de hacerlo
     const gallery = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
  }

  verDetalle(imagen: any)
  {
    this.imgDetalle = imagen;
    this.abrirModal = true;
  }

}
