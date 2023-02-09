import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductFecthService {
  private productsUrl = 'assets/data.json';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  constructor(private http: HttpClient) { }
}
