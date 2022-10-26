import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductModule} from './product/product.module';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: 'product', loadChildren: () => ProductModule}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
