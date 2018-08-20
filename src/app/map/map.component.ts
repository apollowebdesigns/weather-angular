import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  template: '<div id="mapid"></div>',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  createMap() {
    return L.map('mapid').setView([51.505, -0.09], 13);
  }

  constructor() { }

  ngOnInit() {
     const map = this.createMap();
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + environment.mapbox.accessToken, {
          attribution: 'Map data &copy; ' +
            '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © ' +
            '<a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'your.mapbox.access.token'
      }).addTo(map);
  }

}
