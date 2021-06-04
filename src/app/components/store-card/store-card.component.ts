import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/company';
import { CompaniesPageComponent } from '../companies-page/companies-page.component';

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

  @Input() company!: Empresa;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(company: Empresa){
    this.router.navigate(['/buy', company.empresa_id]);
  }

}
