import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component'


const routes: Routes = [{
  path: "", //sempre que estiver na raiz (home) irá carregar este component
  component: HomeComponent
},{
  path: 'products', //sempre que for para produtos , carrega este component
  component:  ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "products/update/:id",
  component: ProductUpdateComponent
},{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
{
  path: 'products/showOne/:id',
  component: DialogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
