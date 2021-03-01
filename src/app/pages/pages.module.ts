import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ComponentsModule } from '../components/components.module';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CategoriaPeliculasComponent } from './categoria-peliculas/categoria-peliculas.component';



@NgModule({
  declarations: 
  [HomeComponent, 
  BuscarComponent, 
  PeliculaComponent,
  CategoriaPeliculasComponent
],
  imports: [
    CommonModule,
    ComponentsModule,
    RatingModule,
    PipesModule
  ]
})
export class PagesModule { }
