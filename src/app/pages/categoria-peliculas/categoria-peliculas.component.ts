import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-categoria-peliculas',
  templateUrl: './categoria-peliculas.component.html',
  styleUrls: ['./categoria-peliculas.component.css']
})
export class CategoriaPeliculasComponent implements OnInit, OnDestroy {
  
  
  public movies : Movie[]=[]
  private tempMovies: Movie[]=[]
  servicio: Subscription

  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos>max) {
      if (this.peliculasService.cargando) {
        return;
      }
      
      this.servicio = this.activatedRoute.params.subscribe(ids=>{
        this.peliculasService.filtrarPeliculasCat(ids.id,200).subscribe(resp=>{
          this.movies.push(...resp)
        })
      })
    }
  }

  constructor( private peliculasService: PeliculasService,
               private activatedRoute : ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.getPelicula()
  }
  
  getPelicula(){
    this.servicio =  this.activatedRoute.params.subscribe(ids=>{
      for (let index = 1; index <= 12; index++) {
        this.peliculasService.filtrarPeliculasCat(ids.id,index).subscribe(resps=>{
          this.movies.push(...resps) 
        })
        
      }
      this.movies = []
      this.peliculasService.resetPage()
    })
  }


  ngOnDestroy(): void {
    this.peliculasService.resetPage()
    this.servicio.unsubscribe()
  }
}
