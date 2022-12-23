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
  productNameDelete: string;
  productIdDelete: number;
  mess: string;
  productNameSearch = '';
  productDescribeSearch = '';

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

  getInfoProductDelete(name: string, id: number) {
    this.productNameDelete = name;
    this.productIdDelete = id;
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa san phẩm  [' + this.productNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore() {
    this.productService.findAllProduct().subscribe(value => {
      this.productList = value.filter(item => item.name.toLowerCase().includes(this.productNameSearch.toLowerCase())
        && item.description.toLowerCase().includes(this.productDescribeSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm khách hàng có tên là: "' + this.productNameSearch + '" (có ' + this.productList.length + ' kết quả).');
    });
  }
}


