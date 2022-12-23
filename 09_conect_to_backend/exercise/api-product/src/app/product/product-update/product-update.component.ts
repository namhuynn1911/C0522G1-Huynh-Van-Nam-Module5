import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  productNew: Product;
  categoryList: Category[] = [];
  // product: Product;

  constructor(private productService: ProductServiceService,
              private activated: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(value => {
      this.productId = Number(value.get('productId'));
    });
    this.productService.findById(this.productId).subscribe(value => {
      this.productNew = value;
      this.productForm.patchValue(this.productNew);
    });
    this.categoryService.findAll().subscribe(value => {
      this.categoryList = value;
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  updateProduct(): void {
    const productAfter = this.productForm.value;
    productAfter.id = this.productNew.id;
    this.productService.saveUpdate(productAfter).subscribe(value => {
      }, error => {
      }, () => {
        this.router.navigateByUrl('');
        alert('Cập nhật thành công !!!');
      }
    );
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
