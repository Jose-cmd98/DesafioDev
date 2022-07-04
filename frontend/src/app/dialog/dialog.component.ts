import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../components/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  produtos: any;

  source: any = {false: 'Indisponível', true: 'Disponível'}

  constructor(
    private productService: ProductService,
    private snap: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.snap.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe((res)=>{
      console.log(res)
      this.produtos = res;
    })
  }

}
