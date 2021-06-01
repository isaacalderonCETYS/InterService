import { Component, OnInit } from '@angular/core';
import { Sidenav } from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public ocultar_logo = true;

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });

  }
  
  onFocus(){
    this.ocultar_logo = false;
  };  

  onBlur(){
    this.ocultar_logo = true;
  };  

}
