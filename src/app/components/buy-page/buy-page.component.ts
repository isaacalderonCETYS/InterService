import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Empresa } from 'src/app/models/company';
import {CompaniesService} from '../../services/companies.service'


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  id!: string;

  constructor(private route: ActivatedRoute, public companyService: CompaniesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('empresa_id')!;
    this.companyService.getCompanies().subscribe(
      res => {
        this.companyService.companies = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
