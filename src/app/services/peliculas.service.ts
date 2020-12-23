import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { CreditResponse } from '../interfaces/credit.response';
import { movieDetails } from '../interfaces/pelicula.response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando : boolean = false

  constructor(private http : HttpClient) {}

  get params(){
    return {
      api_key: '75e3e2b7f03560a2c69202ad39d82900',
      lenguage: 'es=ES',
      page: this.carteleraPage
    }
  }

  getPeliculas():Observable <CarteleraResponse>{
    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
    .pipe(
      tap( ()=>{
        this.carteleraPage += 1
        this.cargando = false;

      })
    )
  }

  buscarPeliculas(texto : string):Observable <Movie[]> {
    const params = {...this.params, page: '1', query: texto}

    return this.http.get<CarteleraResponse>(`${ this.baseUrl}/search/movie`,{params})
    .pipe(
      map(resp => resp.results)
    )
  }

  getPelicula(id: string){
    return this.http.get<movieDetails>(`${ this.baseUrl}/movie/${id}?api_key=${this.params.api_key}&language=es-ES`).pipe(
      catchError(err => of(null))
    )
  }

  resetPage(){
    this.carteleraPage = 1
  }

  getCast(id : string) {
    return this.http.get<CreditResponse>(`${ this.baseUrl}/movie/${id}/credits?api_key=${this.params.api_key}&language=es-ES
    `)
    .pipe(
      map(resp => resp.cast),
      catchError(err => of([]))

    )
  }

}
