import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/product';
import { ProductsPageComponent } from '../products-page/products-page.component';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  
  // @Input() nombre_empresa!: string;
  // @Input() eslogan!: string;
  // @Input() descripcion!: string;
  // @Input() servicio!: string;
  // @Input() categoria!: string;
  // @Input() instagram!: boolean;
  // @Input() facebook!: boolean;
  // @Input() estrellas!: number;
  // @Input() lng!: number;
  // @Input() lat!: number;

  @Input() product!: Producto;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(product: Producto){
    console.log(product.id)
    this.router.navigate(['/buy', product.id]);
  }

}
