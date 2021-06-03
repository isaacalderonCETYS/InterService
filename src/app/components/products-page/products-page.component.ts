import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  hideComida = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFocusComida(){
    this.hideComida = !this.hideComida;
  }

}
