import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'galeria'
})
export class GaleriaPipe implements PipeTransform {

  transform(galeria: string): string {
    return `assets/imgGalerias/${galeria}`;
  }

}
