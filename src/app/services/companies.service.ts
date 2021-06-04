import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  url_get_all = "http://localhost:3000/api/intersec/empresas";
  url_get_one = "http://localhost:3000/api/intersec/empresa/";
  companies: Empresa[] | undefined;
  company!: Empresa;
  constructor(private http: HttpClient) { }

  getCompanies(){
    return this.http.get<Empresa[]>(this.url_get_all);
  }

  getCompany(id: string): Observable<Empresa>{
    return this.http.get<Empresa>(this.url_get_one.concat(id));
  }

}
