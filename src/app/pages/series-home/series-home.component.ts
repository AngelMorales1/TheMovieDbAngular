import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/interfaces/generos-response';
import { Result } from 'src/app/interfaces/ultimas-series';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-home',
  templateUrl: './series-home.component.html',
  styleUrls: ['./series-home.component.css']
})
export class SeriesHomeComponent implements OnInit {

  public border:Number = 1
  public series: Result[]
  public posterSeries: Result[]
  public sliderSeries: Result[] 
  public categorias: Genre[]=[]
  servicio: Subscription

  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos>max) {
      if (this.seriesService.cargando) {
        return;
      }
      this.seriesService.getSeries(this.border).subscribe(resp=>{
        this.series.push(...resp.results)
      })
      
    }
  }

  constructor(
    private seriesService: SeriesService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.servicio = this.seriesService.getSeries(this.border)
    .subscribe(resp =>{
      this.series = resp.results
      this.sliderSeries = resp.results
      this.posterSeries = resp.results
      this.seriesService.resetPage()
    })
    this.getCategorias()
  }

  active(x){
    this.border = x
    this.servicio = this.seriesService.getSeries(this.border)
    .subscribe(resp =>{
      this.series = resp.results
      this.posterSeries = resp.results
      this.seriesService.resetPage()
    })
  }

  getCategorias(){
    this.seriesService.getCategorias().subscribe(resp=>{
      this.categorias = resp
    })
  }

  categoria( cat: number,name: string ){
    localStorage.setItem('categoria', name)
    this.router.navigate([ '/categoria-serie', cat])
  }

  ngOnDestroy(): void {
    this.seriesService.resetPage()
    this.servicio.unsubscribe();
  }

}
