import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriasRoutingModule } from './galerias-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ImgModalComponent } from './components/img-modal/img-modal.component';
import { GaleriaPipe } from './pipes/galeria.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GaleriasComponent } from './pages/galerias/galerias.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    TarjetaComponent,
    ImagenPipe,
    ImgModalComponent,
    GaleriaPipe,
    GaleriasComponent
  ],
  imports: [
    CommonModule,
    GaleriasRoutingModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class GaleriasModule { }
