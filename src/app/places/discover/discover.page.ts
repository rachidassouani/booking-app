import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  allPlaces: Place[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.allPlaces = this.placeService.getPlaces();
  }

}
