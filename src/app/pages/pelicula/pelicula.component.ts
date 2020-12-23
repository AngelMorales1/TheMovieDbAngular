import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credit.response';
import { movieDetails } from 'src/app/interfaces/pelicula.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula : movieDetails
  public cast: Cast[] = [];

  constructor( private activatedRoute : ActivatedRoute,
               private peliculasService : PeliculasService,
               private location : Location,
               private router : Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    combineLatest([
      this.peliculasService.getPelicula(id),this.peliculasService.getCast(id)
    ]).subscribe( ([movie,cast])=>{
      if(movie === null){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie

      this.cast = cast
    })
  }

  regresar(){
    this.location.back();
  }
}
