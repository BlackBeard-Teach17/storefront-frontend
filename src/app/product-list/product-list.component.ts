import { Component, OnInit } from '@angular/core';
import { ProductFetchService } from '../services/product-fetch.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(productList: ProductFetchService) { }

  ngOnInit(): void {}
}
