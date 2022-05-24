import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../shared/pages/error-page/error-page.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
{ path: '', component: HomeComponent,
children: [
  { path: 'galerias' , component: HomeComponent},
  { path: 'listar/:gal', component: ListadoComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', component: ErrorPageComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriasRoutingModule { }
