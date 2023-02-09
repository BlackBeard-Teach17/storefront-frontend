import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, map, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsUrl = 'assets/data.json';
  
  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(tap(_ => console.log('fetched products')), 
    catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.find(product => product.id === id)),
      switchMap(product => {
        if (product) {
          return of(product);
        }
        return throwError(`Product with id ${id} not found`);
      })
    );
  }
  
}
