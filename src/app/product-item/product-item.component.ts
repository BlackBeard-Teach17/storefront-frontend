import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<{product: Product,quantity:number}>();

  ngOnInit(): void {
  }
  constructor(private messageService: MessageService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      quantity: 0,
      url: ''
    }
   }

  onAddToCart(product: Product, quantity: number = 1) {
    this.addToCart.emit({product, quantity});
    this.messageService.add({severity:'success', detail:this.product?.name + ' has been added to the cart'});
  }
}
