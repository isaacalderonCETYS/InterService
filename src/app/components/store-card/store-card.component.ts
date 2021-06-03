import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
