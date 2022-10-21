import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  constructor(private productService: ProductServiceService,
              private activated: ActivatedRoute,
              private router: Router) {
    this.activated.paramMap.subscribe((paramMap: ParamMap) => {
    this.productId = Number(paramMap.get('id'));
    const product = this.getProduct(this.productId);
    this.productForm = new FormGroup({
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description)
    });
    });
  }
  getProduct(id: number) {
    return this.productService.findById(id);
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {
  }

}
