import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Producto } from 'src/app/models/product';
import {ProductsService} from '../../services/products.service'


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  id!: string;

  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
