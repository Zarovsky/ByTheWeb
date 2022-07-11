import { PruebaComponent } from './pages/prueba/prueba.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { GaleriasComponent } from './pages/galerias/galerias.component';

const routes: Routes = [
{ path: '', component: HomeComponent,
children: [
  { path: 'home' , component: GaleriasComponent},
  { path: ':id', component: ListadoComponent },
  { path: 'search', component: BuscarComponent },
  { path: 'listar/prueba', component: PruebaComponent },
  { path: '**', redirectTo:'home'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriasRoutingModule { }
