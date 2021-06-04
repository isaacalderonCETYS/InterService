import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import {CompaniesService} from '../../services/companies.service'

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})
export class CompaniesPageComponent implements OnInit {
  
  mapa!: Mapboxgl.Map;

  hideComida = false;
  hideArticulo = false;
  hideServicio = false;
  hideObjeto = false;

  constructor(public companyService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();

    (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-115.4055386, 32.6542071],
    zoom: 15
    });
  }

  onFocusComida(){
    this.hideComida = !this.hideComida;
  }

  onFocusArticulo(){
    this.hideArticulo = !this.hideArticulo;
  }

  onFocusServicio(){
    this.hideServicio = !this.hideServicio;
  }

  onFocusObjeto(){
    this.hideObjeto = !this.hideObjeto;
  }

  crearMarcador(lng: number, lat: number){
    var popup = new Mapboxgl.Popup({ offset: 25 }).setText("Dessierto")
    const marker = new Mapboxgl.Marker({}).setLngLat([lng,lat]).addTo(this.mapa).setPopup(popup);
  }

  showInMap(lng: number, lat: number){
    this.mapa.flyTo({
      center: [lng,lat]
    });
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(
      res => {
        this.companyService.companies = res;
        console.log(res);
        for (let company of this.companyService.companies) {
          this.crearMarcador(company.lng, company.lat);
        }
      },
      error => {
        console.log("error");
        console.log(error);
      }
    )
  }

  getBool(text: string){
    return (text =="true");
  }

}
