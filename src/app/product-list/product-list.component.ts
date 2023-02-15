import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
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

  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
    window.alert('Your product has been added to the cart!');
  }

  getProducts(): void {
    this.productListService.getProducts().subscribe(products => {
      this.products = products;

    });
  }
}
