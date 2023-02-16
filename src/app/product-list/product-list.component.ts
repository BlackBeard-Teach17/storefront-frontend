import { Component, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
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


  constructor(private productListService: ProductService, private cartService:CartService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  getProducts(): void {
    this.productListService.getProducts().subscribe(products => {
      this.products = products;

    });
  }
}
