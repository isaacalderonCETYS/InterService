import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(public productService: ProductsService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
      },
      error => {
        console.log(error);
      }
    )
  }


}
