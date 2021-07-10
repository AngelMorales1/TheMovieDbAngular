import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap,filter } from 'rxjs/operators';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { CreditResponse } from '../interfaces/credit.response';
import { movieDetails } from '../interfaces/pelicula.response';
import { Genre,Welcome } from '../interfaces/generos-response';
import { popularResponse } from '../interfaces/popular-response';
import { TopRatedResponse } from '../interfaces/top-rated-response';


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

  getPeliculas(x:Number):Observable <CarteleraResponse|popularResponse>{
    this.cargando = true;

    switch (x) {
      case 1:
        return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
          .pipe(
            tap( ()=>{
              this.carteleraPage += 1
              this.cargando = false;
      
            })
          )
        break;
      case 2:
            return this.http.get<popularResponse>( `${this.baseUrl}/movie/popular?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
            .pipe(
              tap( ()=>{
                this.carteleraPage += 1
                this.cargando = false;
        
              })
            )
        break;
        case 3: 
          return this.http.get<TopRatedResponse>( `${this.baseUrl}/movie/top_rated?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
          .pipe(
            tap( ()=>{
              this.carteleraPage += 1
              this.cargando = false;
      
            })
          )
      break;
    }

    
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

  getPeliculaImagenes(id:string){
    return this.http.get<any>(`${this.baseUrl}/movie/`+id+`/images?api_key=${this.params.api_key}`)
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

  getCategorias(){
    return this.http.get<Welcome>(`${ this.baseUrl}/genre/movie/list?api_key=${this.params.api_key}&language=es-ES`).pipe(
      map((resp)=>{
        let generos:Genre[]= resp.genres
        return generos
      })
    )

  }

  filtrarPeliculasCat( id: number, pagina: number ){
    this.cargando = true;
    if (pagina == 200) {
      this.carteleraPage 
    }
    this.carteleraPage = pagina
  
    
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=${this.params.api_key}&language=es-ES&page=${this.carteleraPage}`)
    .pipe(
      map( (resp)=>{ 
        var data = resp.results
        var movies = data.filter( resps=> resps.genre_ids[0] == id)
        return movies
      }),
      tap( ()=>{
        this.carteleraPage += 1
        this.cargando = false;
      })

    )
  }
 
}
