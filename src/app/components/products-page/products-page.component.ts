import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  
  mapa!: Mapboxgl.Map;

  hideComida = false;

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-115.4055386, 32.6542071],
    zoom: 15
    });

    this.crearMarcador(-115.4055386, 32.6542071);
    this.crearMarcador(-115.5055386, 32.6542071);
    this.crearMarcador(-115.6055386, 32.5542071);
    this.crearMarcador(-115.3055386, 32.4542071);

  }

  onFocusComida(){
    this.hideComida = !this.hideComida;
  }

  crearMarcador(lng: number, lat: number){
    var popup = new Mapboxgl.Popup({ offset: 25 }).setText("Dessierto")
    const marker = new Mapboxgl.Marker({}).setLngLat([lng,lat]).addTo(this.mapa).setPopup(popup);
  }

  showInMap(){
    this.mapa.flyTo({
      center: [-115.4055386, 32.6542071]
    });
  }

}
