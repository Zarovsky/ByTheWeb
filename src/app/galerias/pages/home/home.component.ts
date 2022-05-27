import { Component, OnInit } from '@angular/core';
import { menusGaleria } from 'src/app/interfaces/galeria-mock';
import { galeria } from '../../../interfaces/galerias-inerfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuGalerias:galeria[] = menusGaleria; // es el mock con los datos ya escritos
  constructor() { }

  ngOnInit(): void {
  }

}
