import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
  {path:'user', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)},
  {path:'home', loadChildren: () => import('./galerias/galerias.module').then(m => m.GaleriasModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '404', component: ErrorPageComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
