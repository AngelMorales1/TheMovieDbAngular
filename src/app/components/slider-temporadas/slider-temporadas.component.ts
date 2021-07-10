import { Component, Input, OnInit } from '@angular/core';
import { Season } from 'src/app/interfaces/serie-response';
import Swiper from 'swiper';
@Component({
  selector: 'app-slider-temporadas',
  templateUrl: './slider-temporadas.component.html',
  styleUrls: ['./slider-temporadas.component.css']
})
export class SliderTemporadasComponent implements OnInit {
  @Input() seasons: Season[]
  swiper : Swiper

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container2',{
      slidesPerView: 1.2,
      spaceBetween: 0,
      freeMode: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        // when window width is <= 499px
        1060: {
            slidesPerView: 5.4
        },
        // when window width is <= 999px
        800: {
            slidesPerView: 4
        },
        600: {
          slidesPerView: 3
        },
        400: {
          slidesPerView: 2
        }
      }
    })
    this.swiper = swiper
  }

}
