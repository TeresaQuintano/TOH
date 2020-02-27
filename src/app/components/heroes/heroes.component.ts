import { Component, OnInit } from '@angular/core';

import {Hero} from "@share/interfaces/hero";
import {HEROES} from "@mocks/mock-heroes";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    // El array de heroes
    heroes = HEROES;

    // El heroe que creo y que luego se lo paso con ngModel
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    // El heroe que selecciono y que luego se lo paso con ngModel
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        // al seleccionarlo coge los datos de ese heroe
        this.selectedHero = hero;
    }
  constructor() { }

  ngOnInit(): void {

  }

}
