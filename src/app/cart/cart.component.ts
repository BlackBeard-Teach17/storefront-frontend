import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product [] = [];
  name: string | null | undefined;
  total : number = 0;
  submitted : boolean = false;

  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach(item => {
      this.total += item.price * item.quantity;
    });
    return formatNumber(this.total, 'en-US', '1.2-2');
  }
  cartItems = this.cartService.getItems();
  removeProduct(product: Product) {
     this.cartService.removeProduct(product);
  }

  updateQuantity(product: Product, quantity: number) {
    this.cartService.updateQuantity(product, quantity);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkout() {
    this.submitted = true;
    if(this.PaymentDetails.valid) {
      this.name = this.PaymentDetails.value.name;
      localStorage.setItem('name', this.name? this.name : '');
      this.cartService.clearCart();
      this.cartItems = this.cartService.getItems();
      this.router.navigate(['/confirmation']);
    }
  }
  goToProducts() {
    this.router.navigate(['/']);
  }
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  PaymentDetails = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    creditCardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
  });

}

