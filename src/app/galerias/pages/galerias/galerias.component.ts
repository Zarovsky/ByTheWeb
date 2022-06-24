import { Component, OnInit } from '@angular/core';
import { galeria } from '../../../interfaces/galerias-inerfaces';
import { Router } from '@angular/router';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css'],
})
export class GaleriasComponent implements OnInit {
  // cargado : boolean = false;
  newLength: number = 6;

  constructor(private router: Router, private srv: GaleriasService) {
    // esto hay que convertirlo en un observable
    this.menuGalerias = this.srv.getGalerias();
  }

  menuGalerias: galeria[] = [];

  ngOnInit(): void {}

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
