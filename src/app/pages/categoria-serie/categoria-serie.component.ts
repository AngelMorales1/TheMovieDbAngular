import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/interfaces/ultimas-series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-categoria-serie',
  templateUrl: './categoria-serie.component.html',
  styleUrls: ['./categoria-serie.component.css']
})
export class CategoriaSerieComponent implements OnInit {

  public series: Result[]
  servicio: Subscription
  categoria: string
  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos>max) {
      if (this.seriesService.cargando) {
        return;
      }
      this.seriesService.getSeries(1).subscribe(resp=>{
        this.series.push(...resp.results)
      })
      
    }
  }

  constructor(
    private seriesService: SeriesService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getSerie()
    this.categoria = localStorage.getItem('categoria')
  }

  getSerie(){
    this.servicio =  this.activatedRoute.params.subscribe(ids=>{
      for (let index = 1; index <= 122; index++) {
        this.seriesService.filtrarSerieCat(ids.id,index).subscribe(resps=>{
          this.series.push(...resps)
        })
        
      }
      this.series = []
      this.seriesService.resetPage()
    })
  }


  ngOnDestroy(): void {
    this.seriesService.resetPage()
    this.servicio.unsubscribe()
  }

}
