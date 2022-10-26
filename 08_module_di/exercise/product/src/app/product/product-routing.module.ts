import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from './category-list/category-list.component';


const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'create-product', component: ProductCreateComponent},
  {path: 'update/:productId', component: ProductEditComponent},
  {path: 'detail/:productId', component: ProductDetailComponent},
  {path: 'category-list', component: CategoryListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
