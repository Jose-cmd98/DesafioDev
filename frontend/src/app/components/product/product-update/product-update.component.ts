import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

    product: Product = {
    name: '',
    price: null
  }


  constructor(
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
    this.product = product
    });
  }

  updateProduct(): void {
    const _id = this.route.snapshot.paramMap.get('id')
    this.productService.update(this.product, _id).subscribe(() => {
      this.productService.showMessage('Produto Atualizado')
      this.router.navigate(['/products'])
    });

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
