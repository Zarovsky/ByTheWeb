import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { ContactoComponent } from './contacto/pages/contacto/contacto.component';
import { InfoComponent } from './info/pages/info.component';

const routes: Routes = [
  {path:'user', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'galerias', loadChildren: () => import('./galerias/galerias.module').then(m => m.GaleriasModule)},
   { path: '', redirectTo: 'galerias', pathMatch: 'full'},
  { path:'contacto', component: ContactoComponent},
  { path:'info', component: InfoComponent},
  { path: '404', component: ErrorPageComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
