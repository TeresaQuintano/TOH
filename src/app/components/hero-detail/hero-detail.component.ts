import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "@interfaces/hero";
import { HeroService }  from '@services/hero.service';

import { Observable, of } from "rxjs";
import { HEROES } from "@mocks/mock-heroes";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.getHero();
    }
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}