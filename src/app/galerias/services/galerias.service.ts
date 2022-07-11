import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { environment } from 'src/environments/environment';
import { Imagen } from '../../interfaces/imagen-interface';

@Injectable({
  providedIn: 'root'
})
export class GaleriasService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  // Galerias
  getGalerias(): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(`${ this.baseUrl}/galerias`);
  }

  getGaleriaById(id:string):Observable<Galeria> {
    return this.http.get<Galeria>(`${this.baseUrl}/galerias?id_galeria=${id}`);
  }

  getGaleriaByDirectory(id:string):Observable<Galeria> {
    return this.http.get<Galeria>(`${this.baseUrl}/galerias?directorio_galeria=${id}`);
  }

  // Imagenes
  getImagens(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${ this.baseUrl}/imagenes`);
  }

  // desde galeria coincide con directorio de imágenes
  getImagensByGallery(galeria: string): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${ this.baseUrl}/imagenes?galeria_imagen=${galeria}`);
  }

  getImagensById(id: string): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${ this.baseUrl}/imagenes?id_imagen=${id}`);
  }

/*
  getSugerencias (termino:string ): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(`${ this.baseUrl}?q=${termino}&_limit=6`);
  }
  // insertar datos
  agregarGaleria(galeria: Galeria):Observable<Galeria> {
    return this.http.post<Galeria>(`${ this.baseUrl}`,galeria);
  }
  // editar heroe
  actualizarGaleria(galeria: Galeria):Observable<Galeria> {
    return this.http.put<Galeria>(`${ this.baseUrl}/${galeria.id_galeria}`,galeria);
  }

   // eliminar heroe
   eliminarGaleria(id: string):Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl}/${id}`);
  }
*/
}
