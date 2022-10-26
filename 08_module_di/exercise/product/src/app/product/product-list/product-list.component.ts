import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllProduct().subscribe(value => {
      this.productList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }

  onDelete(id: number, name: string) {
    if (confirm('Ban có chắc xóa ' + name)) {
      this.productService.deleteProduct(id, name).subscribe(value => {
        this.ngOnInit();
      }, error => {
      }, () => {
        this.router.navigateByUrl('/product/list');
      });
    }
  }
}

