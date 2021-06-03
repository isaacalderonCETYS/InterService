import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductsPageComponent } from '../products-page/products-page.component';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  
  @Input() nombre_empresa!: string;
  @Input() eslogan!: string;
  @Input() descripcion!: string;
  @Input() servicio!: string;
  @Input() instagram!: boolean;
  @Input() facebook!: boolean;
  @Input() direccion: string = "";
  @Input() estrellas!: number;
  @Input() lng!: number;
  @Input() lat!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
