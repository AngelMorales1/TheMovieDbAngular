import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CategoriaPeliculasComponent } from './pages/categoria-peliculas/categoria-peliculas.component';
import { CategoriaSerieComponent } from './pages/categoria-serie/categoria-serie.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SerieComponent } from './pages/serie/serie.component';
import { SeriesHomeComponent } from './pages/series-home/series-home.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'seriesHome',
    component: SeriesHomeComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  },
  {
    path: 'serie/:id',
    component: SerieComponent
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
    path: 'categoria-serie/:id',
    component: CategoriaSerieComponent
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
