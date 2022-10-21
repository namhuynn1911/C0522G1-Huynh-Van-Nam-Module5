import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDeleteComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
