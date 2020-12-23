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
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    })
  }
}
