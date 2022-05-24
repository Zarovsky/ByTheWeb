import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriasRoutingModule } from './galerias-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    GaleriasRoutingModule,
    RouterModule
  ]
})
export class GaleriasModule { }
