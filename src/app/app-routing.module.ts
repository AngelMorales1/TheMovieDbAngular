import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CategoriaPeliculasComponent } from './pages/categoria-peliculas/categoria-peliculas.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    path: 'categoria/:id',
    component: CategoriaPeliculasComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
