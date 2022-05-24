import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AgregarGaleriaComponent } from './pages/agregar-galeria/agregar-galeria.component';
import { AgregarImagenComponent } from './pages/agregar-imagen/agregar-imagen.component';
import { ListadoImagenComponent } from './pages/listado-imagen/listado-imagen.component';
import { ListadoGaleriaComponent } from './pages/listado-galeria/listado-galeria.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ImagenComponent } from './pages/imagen/imagen.component';


@NgModule({
  declarations: [
    AgregarGaleriaComponent,
    AgregarImagenComponent,
    ListadoImagenComponent,
    ListadoGaleriaComponent,
    GaleriaComponent,
    ImagenComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
