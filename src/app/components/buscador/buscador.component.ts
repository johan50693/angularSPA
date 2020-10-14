import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Heroe,HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor( private route:ActivatedRoute, heroeservice:HeroesService) { 

    this.route.params.subscribe( params => {
      // console.log(params);
      this.heroes= heroeservice.buscarHeroes(params.nombre);
      // console.log(this.heroes);
    })
  }

  ngOnInit() {
  }

}
