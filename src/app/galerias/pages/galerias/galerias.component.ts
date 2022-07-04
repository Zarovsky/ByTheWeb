import { Component, OnInit } from '@angular/core';
import { Galeria } from '../../../interfaces/galerias-inerfaces';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css'],
})
export class GaleriasComponent implements OnInit {
  // cargado : boolean = false;
  newLength: number = 6;

  constructor( private srv: GaleriasService) { }

  menuGalerias: Galeria[] = [];

  ngOnInit(): void {
    console.log('en el ini');
  this.srv.getGalerias().subscribe(galerias => {this.menuGalerias = galerias});
  }

  showMore() {
    // this.cargado = false;
    let numTmp = (this.newLength += 3);
    if (numTmp > this.menuGalerias.length) {
      numTmp = this.menuGalerias.length;
    }
    this.newLength = numTmp;
    // this.cargado = true;
  }
}
