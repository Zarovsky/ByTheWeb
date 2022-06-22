import { Injectable } from '@angular/core';
import { menusGaleria } from 'src/app/interfaces/galeria-mock';
import { galeria } from 'src/app/interfaces/galerias-inerfaces';

@Injectable({
  providedIn: 'root'
})
export class GaleriasService {

  constructor() { }


  // retornamos el mock de galerias
  // esto irá en bbdd
  getGalerias ( ): galeria[] {
    return menusGaleria;
  }

  // retorna una galería por nombre directorio
  getgaleriaById(galeria: string) : galeria
  {
    const index = menusGaleria.findIndex(value => value.directorio_galeria === galeria);

    return menusGaleria[index];
  }

}
