import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  resultado : Movie[] = []
  texto: string

  constructor( private activatedRoute : ActivatedRoute,
               private peliculasService : PeliculasService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp=>{
      this.texto = resp.texto
      this.peliculasService.buscarPeliculas(resp.texto).subscribe(resp=>{
        this.resultado = resp
      })
    })
  }

}
