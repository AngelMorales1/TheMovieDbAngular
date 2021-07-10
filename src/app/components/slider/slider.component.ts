import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Swiper from 'swiper';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  @Input() movies : Movie[];
  next: boolean
  Swiper : Swiper

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      observer: true,
      observeParents: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      })
     this.Swiper = mySwiper
  }


}
