import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [] = [];


  constructor(private productListService: ProductService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  getProducts(): void {
    this.productListService.getProducts().subscribe(products => {
      this.products = products;

    });
  }
}
