import { Injectable } from '@angular/core';
import { Producto } from '../models/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url_get_all = "http://localhost:3000/api/intersec/productos";
  url_get_one = "http://localhost:3000/api/intersec/producto/";
  products: Producto[] | undefined;
  product!: Producto;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.url_get_all);
  }

  getProduct(id: string): Observable<Producto>{
    return this.http.get<Producto>(this.url_get_one.concat(id));
  }

}
