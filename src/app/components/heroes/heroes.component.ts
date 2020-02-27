import { Component, OnInit } from '@angular/core';

import { HeroService } from "@services/hero.service";
import { MessageService } from '@services/message.service'

import { Hero } from "@share/interfaces/hero";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    // El array de heroes
    heroes: Hero[];

    // PASO 1: El heroe que creo y que luego se lo paso con ngModel
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    // PASO 2: El heroe que selecciono y que luego se lo paso con ngModel
    // selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        // public messageService: MessageService
    ) {
    }

    ngOnInit(): void {
        this.getHeroes()
    }

    // PASO 2: al seleccionarlo coge los datos de ese heroe
    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    //     this.messageService.add(`HeroService:Has seleccionado el hero con id=${hero.id}`);
    // }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
