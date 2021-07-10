import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Genre, Welcome } from '../interfaces/generos-response';
import { SerieResponse } from '../interfaces/serie-response';
import { SeriesPopularesResponse } from '../interfaces/series-populares-response';
import { TopRatedSeries } from '../interfaces/top-rated-series';
import { UltimasSeries } from '../interfaces/ultimas-series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando : boolean = false

  constructor(private http : HttpClient) { }

  get params(){
    return {
      api_key: '75e3e2b7f03560a2c69202ad39d82900',
      lenguage: 'es=ES',
      page: this.carteleraPage
    }
  }
 
  getSeries(x:Number):Observable <UltimasSeries|SeriesPopularesResponse|TopRatedSeries>{
    this.cargando = true;

    switch (x) {
      case 1:
        return this.http.get<UltimasSeries>(`${this.baseUrl}/tv/airing_today?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
          .pipe(
            tap( ()=>{
              this.carteleraPage += 1
              this.cargando = false;
      
            })
          )
        break;
      case 2:
            return this.http.get<SeriesPopularesResponse>(`${this.baseUrl}/tv/popular?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
            .pipe(
              tap( ()=>{
                this.carteleraPage += 1
                this.cargando = false;
              })
            )
        break;
        case 3: 
          return this.http.get<TopRatedSeries>( `${this.baseUrl}/tv/top_rated?api_key=${this.params.api_key}&language=es-ES&page=${this.params.page}`)
          .pipe(
            tap( ()=>{
              this.carteleraPage += 1
              this.cargando = false;
      
            })
          )
      break;
    }
}


getSerie(id: number){
  return this.http.get<SerieResponse>(`${this.baseUrl}/tv/`+id+`?api_key=${this.params.api_key}&language=es-ES`)
}


getCategorias(){
  return this.http.get<Welcome>(`${ this.baseUrl}/genre/tv/list?api_key=${this.params.api_key}&language=es-ES`).pipe(
    map((resp)=>{
      let generos:Genre[]= resp.genres
      return generos
    })
  )

}

filtrarSerieCat( id: number, pagina: number ){
  this.cargando = true;
  if (pagina == 200) {
    this.carteleraPage 
  }
  this.carteleraPage = pagina

  
  return this.http.get<UltimasSeries>(`${this.baseUrl}/tv/airing_today?api_key=${this.params.api_key}&language=es-ES&page=${this.carteleraPage}`)
  .pipe(
    map( (resp)=>{ 
      console.log(resp)
      var data = resp.results
      var series = data.filter( resps=> resps.genre_ids[0] == id)
      return series
    }),
    tap( ()=>{
      this.carteleraPage += 1
      this.cargando = false;
    })

  )
}

resetPage(){
  this.carteleraPage = 1
}


}