import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterrPipe } from './posterr.pipe';



@NgModule({
  declarations: [
    PosterrPipe
  ],
  exports: [
    PosterrPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
