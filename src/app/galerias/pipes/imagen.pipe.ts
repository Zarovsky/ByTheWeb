import { Pipe, PipeTransform } from '@angular/core';
import { Imagen } from '../../interfaces/imagen-interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: Imagen): string {
    return `assets/${imagen.galeria_imagen}/${imagen.galeria_imagen}`;
  }

}
