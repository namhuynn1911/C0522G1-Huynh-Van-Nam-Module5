import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductServiceService} from '../../service/product-service.service';
import {FnParam} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;

  constructor(private activated: ActivatedRoute,
              private productService: ProductServiceService, private router: Router) {
    this.activated.paramMap.subscribe((paramMap: ParamMap) => {
      this.productId = Number(paramMap.get('id'));
      const product = this.getProduct(this.productId);
      this.productForm = new FormGroup({
        // id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {
  }

}
