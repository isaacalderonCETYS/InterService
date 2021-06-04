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

  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id).subscribe(
      res => {
        this.productService.product = res;
        console.log(this.productService.product);
      },
      error => {
        console.log(error);
      }
    )
  }

}
