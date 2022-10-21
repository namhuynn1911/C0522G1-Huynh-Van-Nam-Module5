import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create-product', component: ProductCreateComponent},
  {path: 'update/:id', component: ProductUpdateComponent},
  {path: 'delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductRoutingModule {
}
