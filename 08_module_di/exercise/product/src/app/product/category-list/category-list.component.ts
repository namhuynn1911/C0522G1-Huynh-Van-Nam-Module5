import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categoryList: Category[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

}
