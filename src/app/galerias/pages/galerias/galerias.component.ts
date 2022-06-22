import { Component, OnInit } from '@angular/core';
import { galeria } from '../../../interfaces/galerias-inerfaces';
import { Router } from '@angular/router';
import { GaleriasService } from '../../services/galerias.service';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css'
  ]
})
export class GaleriasComponent implements OnInit {

  constructor(private router: Router, private srv: GaleriasService) {


  }

  menuGalerias:galeria[] = [];
  totalGalerias:galeria[] = [];


  ngOnInit(): void {
    // esto hay que convertirlo en un observable
    this.totalGalerias = this.srv.getGalerias();
    // cargamos los 6 primeros
    this.menuGalerias = this.totalGalerias.slice(0,6);
  }

  showMore() {
    let newLength = this.menuGalerias.length + 3;
    if (newLength > this.totalGalerias.length) {
        newLength = this.totalGalerias.length
    }
     this.menuGalerias = this.totalGalerias.slice(0, newLength);
  }

}
