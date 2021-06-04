import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url_get_all = "http://localhost:3000/api/chefsito/productos";
  url_get_one = "http://localhost:3000/api/chefsito/producto/";
  products: Producto[] | undefined;
  product!: Producto;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.url_get_all);
  }

  getProduct(id: string){
    return this.http.get<Producto>(this.url_get_one.concat(id));
  }

}
