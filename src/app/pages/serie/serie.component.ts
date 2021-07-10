import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



import { Season, SerieResponse } from 'src/app/interfaces/serie-response';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{

  private servicio: Subscription
  public serie : SerieResponse
  public seasons : Season[]
  
  constructor(
    private activatedRoute : ActivatedRoute,
    private seriesService: SeriesService,
    private location : Location,
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    
    this.servicio = this.seriesService.getSerie(id).subscribe(resp=>{
      if(resp == null){
        this.router.navigateByUrl('/home');
        return;
      }
      this.serie = resp
      this.seasons = resp.seasons
      console.log(this.serie)
    })
  }

  regresar(){
    this.location.back();
  }
  
  ngOnDestroy(): void {
    this.servicio.unsubscribe()
  }

}


