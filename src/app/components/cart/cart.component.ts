import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/types/cart.interface';
import { Router } from '@angular/router';
import { Order } from 'src/app/types/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart = {
    items: [],
  };
  total: string;
  fullName: string;
  email: string;
  address: string;
  creditCard: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    private customerOrder: OrderService
  ) {
    this.total = '0';
    this.fullName = '';
    this.email = '';
    this.address = '';
    this.creditCard = '';
  }

  ngOnInit() {
    this.cart.items = this.cartService.getCartItems();
    this.total = this.cartService.cartTotal();
  }

  setCartTotal(): void {
    this.total = this.cartService.cartTotal();
  }

  addToCart(item: CartItem): void {
    this.cartService.addToCart(item);
    this.total = this.cartService.cartTotal();
  }

  onSubmit(): void {
    const fullName = this.fullName;
    const email = this.email;
    const address = this.address;
    const creditCard = this.creditCard;

    this.customerOrder.setCustomerOrder({
      fullName,
      email,
      address,
      creditCard,
    });
    this.router.navigate(['/confirmation']);
  }
}
