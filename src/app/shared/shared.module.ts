import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { InputBuscarComponent } from './pages/input-buscar/input-buscar.component';
import { HeaderComponent } from './pages/header/header.component';
import { VntmodalComponent } from './pages/vntmodal/vntmodal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ErrorPageComponent,
    InputBuscarComponent,
    VntmodalComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    VntmodalComponent,
    ErrorPageComponent,
    InputBuscarComponent,
  ],
})
export class SharedModule {}
