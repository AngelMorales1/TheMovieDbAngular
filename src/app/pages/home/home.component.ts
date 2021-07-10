import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Genre } from 'src/app/interfaces/pelicula.response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  series : any
  movies : Movie[] = []
  moviesSlideshow : Movie[] = []
  public categorias: Genre[]=[]
  servicio: Subscription
  public border:Number = 1
  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos>max) {
      if (this.peliculasService.cargando) {
        return;
      }
      this.peliculasService.getPeliculas(this.border).subscribe(resp=>{
        this.movies.push(...resp.results)
      })
      
    }
  }

  constructor( private peliculasService : PeliculasService,
               private seriesService: SeriesService,
               private router : Router
    ) { }

  ngOnInit(): void {
    // Peticion de las peloculas, series y categorias
    this.servicio = this.peliculasService.getPeliculas(this.border)
      .subscribe(resp =>{
        this.movies = resp.results
        this.moviesSlideshow = resp.results
        
      })
    this.getSeries()
    this.getCategorias()

  }
  
  active(x){
    this.border = x
    this.servicio = this.peliculasService.getPeliculas(this.border)
    .subscribe(resp =>{
      this.movies = resp.results
      this.peliculasService.resetPage()
    })
  }

  getSeries(){
    this.seriesService.getSeries(1)
      .subscribe(resp=>{
        this.series = resp
        console.log(resp)
      })
  }

  getCategorias(){
    this.peliculasService.getCategorias().subscribe(resp=>{
      this.categorias = resp
    })
  }

  HomeSerie(){
    this.router.navigate([ '/seriesHome'])
  }

  categoria( cat: number,name: string ){
    localStorage.setItem('categoria', name)
    this.router.navigate([ '/categoria', cat])
  }

  ngOnDestroy(): void {
    this.peliculasService.resetPage()
    this.seriesService.resetPage()
    this.servicio.unsubscribe();
  }


}
