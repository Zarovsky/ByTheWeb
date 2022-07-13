import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Imagen } from 'src/app/interfaces/imagen-interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {

  constructor() { }

  @Output() onVerDetalle: EventEmitter<Imagen> = new EventEmitter();
  @Input() imagenes: Imagen[] = [];

  verDetalle(imagen: Imagen)
  {
    this.onVerDetalle.emit(imagen);
  }

  addproduct(imagen: Imagen, msj: HTMLElement, icon: HTMLElement) {
    var cont: number = imagen.megustan_imagen;
    if (icon.textContent == 'favorite_border') {
      cont++;
      imagen.megustan_imagen++;
      // this.productosService.coloriconocarro = true; // ya que añadimos un elemento al carrito
      msj.classList.add('mensaje2');
      setTimeout(() => {
        msj.classList.remove('mensaje2');
      }, 1500);
      icon.textContent = 'favorite';
      // this.tratarFavoritos(producto.id, true); // cookie
    } else {
      cont--;
      if (cont < 0) cont = 0;
      imagen.megustan_imagen = cont;
      icon.textContent = 'favorite_border';
      // this.tratarFavoritos(producto.id, false); // cookie
    }
    // llamada al servicio, común para ambos casos
    //this.productosService
    //  .itemFavorite(producto.id, cont)
    //  .subscribe((res) => console.log(res));
  }
  // condición ternaria en el html para poenr uno u otro icono
  esFavorito(id: string): boolean {
   //  if (this.favoritos.indexOf(id) != -1) return true;
   // else return false;

   // temporal
   return true;
  }

}
