import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { Component, OnInit } from '@angular/core';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styles: [
  ]
})
export class PruebaComponent implements OnInit {

  constructor(private srv: GaleriasService) { }

galeria!: Galeria;

  ngOnInit(): void {
    let p: string = 'nature';
    this.srv.getGaleriaByDirectory(p).subscribe(
      resp => {
        this.galeria = resp}
    );
  }

}
