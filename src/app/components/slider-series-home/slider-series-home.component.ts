import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Swiper from 'swiper';
import { Result } from 'src/app/interfaces/ultimas-series';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider-series-home',
  templateUrl: './slider-series-home.component.html',
  styleUrls: ['./slider-series-home.component.css']
})
export class SliderSeriesHomeComponent implements OnInit {

  @Input() series : Result[];
  next: boolean
  Swiper : Swiper
  public mobile: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      observer: true,
      observeParents: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      })
     this.Swiper = mySwiper
  }
}
