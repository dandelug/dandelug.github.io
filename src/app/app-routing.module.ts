import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosModule } from './components/servicios/servicios.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SociosComponent } from './components/socios/socios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'servicios',
    component:ServiciosComponent
  },
  {
    path: 'servicios',
    //loadChildren: './components/servicios/servicios.module#ServiciosModule'
    loadChildren: () => import('./components/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'socios',
    component: SociosComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
