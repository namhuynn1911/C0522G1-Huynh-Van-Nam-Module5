import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {IProduct} from '../../model/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: IProduct[] = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }
}
