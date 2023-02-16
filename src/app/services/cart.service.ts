import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];


  addToCart(product: Product, quantity: number = 1): void {
    const productExistsInCart = this.items.find(item => item.id === product.id);
    if (productExistsInCart) {
      productExistsInCart.quantity = quantity;
    }
    else {
      this.items.push({ ...product, quantity: quantity });
      return;
    }
  }

  removeProduct(product: Product) {
    const productExistsInCart = this.items.find(item => item.id === product.id);
    if (productExistsInCart) {
      const index = this.items.indexOf(productExistsInCart);
      this.items.splice(index, 1);
    }
  }

  updateQuantity(product: Product, quantity: number): void {
    const productExistsInCart = this.items.find(item => item.id === product.id);
    if (productExistsInCart) {
      if (quantity > 0) {
        productExistsInCart.quantity = quantity;
      }
      else {
        const index = this.items.indexOf(productExistsInCart);
        this.items.splice(index, 1);
      }
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  NumberOfItemsInCart() : number {
    let numberOfItems = 0;
    this.items.forEach(item => {
      numberOfItems += item.quantity;
    });
    return numberOfItems;
  }

  constructor() { }
}
