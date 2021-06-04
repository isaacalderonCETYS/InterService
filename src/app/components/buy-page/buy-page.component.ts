import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { logging } from 'selenium-webdriver';
import { Empresa } from 'src/app/models/company';
import { Producto } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {CompaniesService} from '../../services/companies.service'


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  id!: string;
  productos: Producto[] = [];

  constructor(private route: ActivatedRoute, public companyService: CompaniesService, public productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('empresa_id')!;
    this.companyService.getCompanies().subscribe(
      res => {
        this.companyService.companies = res;
        for (let company of this.companyService.companies){
          if (company.empresa_id == this.id){
            for (let product of company.productos){
              this.productService.getProduct(product).subscribe(
                res =>{
                  this.productos.push(res);
                },
                error =>{
                  console.log(error);
                }
              )
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
