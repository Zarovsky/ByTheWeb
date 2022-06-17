import { Component, OnInit } from '@angular/core';
import { menusGaleria } from 'src/app/interfaces/galeria-mock';
import { galeria } from '../../../interfaces/galerias-inerfaces';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css'
  ]
})
export class GaleriasComponent implements OnInit {

  constructor() { }

  menuGalerias:galeria[] = menusGaleria; // es el mock con los datos ya escritos

  ngOnInit(): void {
  }

}
