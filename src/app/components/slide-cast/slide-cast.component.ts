import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credit.response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-cast',
  templateUrl: './slide-cast.component.html',
  styleUrls: ['./slide-cast.component.css']
})
export class SlideCastComponent implements OnInit {
  @Input() cast: Cast[];
  Swiper : Swiper

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container',{
      slidesPerView: 2.2,
      freeMode: true,
      breakpoints: {
        // when window width is <= 499px
        1300: {
            slidesPerView: 8
        },
        // when window width is <= 999px
        580: {
            slidesPerView: 6
        },
        370: {
          slidesPerView: 3
        }
      }
    })
  }
}
