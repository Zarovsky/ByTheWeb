import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaleriasService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getGalerias(): Observable<Galeria[]> {
    console.log(this.baseUrl);
    return this.http.get<Galeria[]>(`${ this.baseUrl}`);
  }

  getGaleriaById(id:string):Observable<Galeria> {
    return this.http.get<Galeria>(`${this.baseUrl}/${id}`);
  }

  getGaleriaByTitle(id:string):Observable<Galeria> {
    return this.http.get<Galeria>(`${this.baseUrl}/${id}`);
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
