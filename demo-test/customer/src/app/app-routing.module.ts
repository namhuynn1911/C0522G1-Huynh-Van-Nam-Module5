import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerModule} from './customer/customer.module';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'customer', loadChildren: () => CustomerModule
  }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
