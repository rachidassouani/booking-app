import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    new Place("1", "test", "test2", "https://picsum.photos/200", 30),
    new Place("2", "test", "test2", "https://picsum.photos/200", 30),
    new Place("3", "test", "test2", "https://picsum.photos/200", 30),
    new Place("4", "test", "test2", "https://picsum.photos/200", 30),
    new Place("5", "test", "test2", "https://picsum.photos/200", 30),
    new Place("6", "test", "test2", "https://picsum.photos/200", 30)
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }
}
