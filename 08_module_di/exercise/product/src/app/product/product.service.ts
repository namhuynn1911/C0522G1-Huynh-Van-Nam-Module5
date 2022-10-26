import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/productList';
  private API_CATEGORY = 'http://localhost:3000/categoryList';

  constructor(private httpClient: HttpClient) {
  }

  findAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CATEGORY);
  }

  findAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + productId);
  }

  saveUpdate(productObj: Product): Observable<Product> {
    return this.httpClient.patch<Product>(this.API_URL + '/' + productObj.id, productObj);
  }

  saveCreate(productObj: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL, productObj);
  }

  deleteProduct(productId: number, productName: string): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + productId);
  }
}
