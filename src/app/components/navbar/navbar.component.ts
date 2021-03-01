import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/interfaces/generos-response';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public categorias: Genre[]=[]

  constructor(private router : Router,
              private peliculaService: PeliculasService
    ) { }

  ngOnInit(): void {
    this.getCategorias()
  }

  getCategorias(){
    this.peliculaService.getCategorias().subscribe(resp=>{
      this.categorias = resp
    })
  }

  buscar( buscarTxt: string ){
    buscarTxt = buscarTxt.trim()

    if(buscarTxt.length == 0){
      return ;
    }
    this.router.navigate([ '/buscar', buscarTxt])
  }

  verCategoria(){
    
  }

}
