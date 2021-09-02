import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const heroes = [
      {id: 1, name: "Superman"},
      {id: 2, name: "Batman"},
      {id: 3, name: "Green Lantern"},
      {id: 4, name: "Shazam"},
      {id: 5, name: "Wonder Woman"},
      {id: 6, name: "Cyborg"},
      {id: 7, name: "Aquaman"},
      {id: 8, name: "Green Arrow"},
      {id: 9, name: "Flash"},
      {id: 10, name: "Cat woman"},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
