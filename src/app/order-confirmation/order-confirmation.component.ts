import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  @Input() name: string | null | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')?.toUpperCase();
    console.log('name: ', this.name);
  }
  goToProducts() {
    this.router.navigate(['/']);
  }
}
