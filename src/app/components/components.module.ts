import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { SlideCastComponent } from './slide-cast/slide-cast.component';
import { SliderSeriesComponent } from './slider-series/slider-series.component';
import { SliderImagenesComponent } from './slider-imagenes/slider-imagenes.component';
import { SliderTemporadasComponent } from './slider-temporadas/slider-temporadas.component';
import { SliderSeriesHomeComponent } from './slider-series-home/slider-series-home.component';
import { SeriesPostedGridComponent } from './series-posted-grid/series-posted-grid.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    SlideCastComponent,
    SliderSeriesComponent,
    SliderImagenesComponent,
    SliderTemporadasComponent,
    SliderSeriesHomeComponent,
    SeriesPostedGridComponent,
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    SlideCastComponent,
    SliderSeriesComponent,
    SliderImagenesComponent,
    SliderTemporadasComponent,
    SliderSeriesHomeComponent,
    SeriesPostedGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]

})
export class ComponentsModule { }
