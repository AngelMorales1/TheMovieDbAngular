import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/popular-response';


@Component({
  selector: 'app-series-posted-grid',
  templateUrl: './series-posted-grid.component.html',
  styleUrls: ['./series-posted-grid.component.css']
})
export class SeriesPostedGridComponent implements OnInit {

  @Input() series : Result[]
  constructor(
    private router : Router) { }

  ngOnInit(): void {
  }

  verSerie(series:Result){
    this.router.navigate(['/serie', series.id] )
  }

}
