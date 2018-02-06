import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-hero';
import { Hero } from './hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(a: Hero): void {
    this.selectedHero = a;
    console.log(a);
  }
  constructor() {
    console.log(this.heroes);
  }
  ngOnInit() {
  }

}
