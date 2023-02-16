import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
  product: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private messageService: MessageService
    ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url : '',
      quantity: 0
    };
   }

   addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
    this.productAdded(product);
   }

   goBack() {
    this.router.navigate(['/']);
   }

   productAdded(product : Product) {
    this.messageService.add({severity:'success', detail:product.name + ' has been added to the cart'});
   }

  ngOnInit() {
    // Get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route.
    this.productService.getProductById(productIdFromRoute)
      .subscribe((product) => {
        this.product = product;
      });
  }

}
