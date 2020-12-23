import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterrPipe implements PipeTransform {

  transform(poster : string): string {
    // 
    if (poster) {
      return `https://image.tmdb.org/t/p/w500${ poster }`
    }else{
      return './assets/no-image.jpg'
    }

  }

}
