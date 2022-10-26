import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categoryList: Category[];

  productForm: FormGroup = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    }
  );
  constructor(private productService: ProductService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    });
  }
  click() {
    const product: Product = this.productForm.value;
    console.log(product);
    this.productService.saveCreate(product).subscribe(value => {
      this.productForm.reset();
    }, error => {
    }, () => {
      alert('Thêm mới Thành Công !!!');
      this.router.navigateByUrl('/product/list');
    });
  }
}
