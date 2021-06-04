import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, AfterViewInit {

  company!: Empresa;

  constructor(public productService: ProductsService, public companyService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators: true,
      });
    });

    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
      },
      error => {
        console.log(error);
      }
    )
    
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(
      res => {
        this.company = res[0];
      },
      error => {
        console.log(error);
      }
    )
  }

  ngAfterViewInit(): void {
    
  }

}
