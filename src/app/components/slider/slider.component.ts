import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  @Input() movies : Movie[];
  
  next: boolean

  Swiper : Swiper

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, 

    })
    this.Swiper = mySwiper
  }

  slidePrev(){
    this.Swiper.slidePrev();
  }

  slideNext(){
    this.Swiper.slideNext();
  }

}
