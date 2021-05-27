import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { } //declarando o router no constructor 

  ngOnInit(): void {
  }

  navigateToProductCreate() : void {
    this.router.navigate(['/products/create']) //usando o router do constructor
  }                                            //usado no navigate do button(prod-crud-component.html)

}
