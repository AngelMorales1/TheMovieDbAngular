import { Component, Input, OnInit } from '@angular/core';
import { Backdrop } from 'src/app/interfaces/movie-images';
import Swiper from 'swiper';
@Component({
  selector: 'app-slider-imagenes',
  templateUrl: './slider-imagenes.component.html',
  styleUrls: ['./slider-imagenes.component.css']
})
export class SliderImagenesComponent implements OnInit {
  @Input() imagenes: Backdrop[];
  Swiper : Swiper


  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container3',{
      slidesPerView: 0.2,
      freeMode: true,
      spaceBetween: 10,
      breakpoints: {
        // when window width is <= 499px
        1300: {
          slidesPerView: 2.5
      },
        970: {
          slidesPerView: 2
      },
        700: {
          slidesPerView: 1.5
      },
      500: {
        slidesPerView: 1
      },
        270: {
          slidesPerView: 0.8,
          spaceBetween: 100,
      }
      }
    })
    
  }


}
