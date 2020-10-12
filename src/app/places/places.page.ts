import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}
