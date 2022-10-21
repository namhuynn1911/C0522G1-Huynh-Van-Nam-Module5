import {Injectable} from '@angular/core';
import {IProduct} from '../model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = new Array();

  constructor() {
    this.products.push({id: 1, name: 'Iphone 11', price: 100000, description: 'Mới'},
      {id: 2, name: 'Máy Tính', price: 150000, description: '99%'},
      {id: 3, name: 'Xe Oto', price: 250000, description: 'Mới'},
      {id: 4, name: 'Tai Phone', price: 250000, description: 'Mới'});
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  updateProduct(id: number, product: IProduct) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
