import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  constructor(private cartService: CartService) {
  }

  cartItemsCount() {
    let cartItems = this.cartService.getItems().reduce((acc, item) => acc + item.quantity, 0);
    return cartItems;
  }

}
