import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

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

  constructor(private productService: ProductServiceService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
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
      this.router.navigateByUrl('');
    });
  }
}
