import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [] //recebe array de produtos
  displayedColumns = ['id', 'name', 'price', 'action'] //from columns

  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }



}
