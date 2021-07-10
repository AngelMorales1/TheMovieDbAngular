import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/series-populares-response'
import Swiper from 'swiper';
import { UltimasSeries } from 'src/app/interfaces/ultimas-series';

@Component({
  selector: 'app-slider-series',
  templateUrl: './slider-series.component.html',
  styleUrls: ['./slider-series.component.css']
})

export class SliderSeriesComponent implements OnInit {

  @Input() series: UltimasSeries
  Swiper : Swiper

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  verSerie(serie: Result){
    this.router.navigate(['/serie', serie.id] )
  }
  
  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container2',{
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 2,
      breakpoints: {
        // when window width is <= 499px
        1300: {
            slidesPerView: 5.4
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 5
        },
        700: {
          slidesPerView: 3.3
      },
        370: {
          slidesPerView: 2
      }
      }
    })
    this.Swiper = swiper
  }

}
