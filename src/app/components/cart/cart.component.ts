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
  creditCard: string;
  address: string;
  email: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    private customerOrder: OrderService
  ) {
    this.total = '0';
    this.fullName = '';
    this.creditCard = '';
    this.address = '';
    this.email = '';
  }

  ngOnInit() {
    this.cart.items = this.cartService.getCartItems();
    this.total = this.cartService.cartTotal();
  }

  quantityChange(item: CartItem) {
    this.cartService.addToCart(item);

    if (item.quantity === 0) {
      alert(`${item.product.name} has been removed from your cart!`);
      this.cart.items = this.cartService.getCartItems();
      this.total = this.cartService.cartTotal();
    }
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
    const orderTotal = this.total;

    this.customerOrder.setCustomerOrder({
      fullName,
      orderTotal,
    });
    this.router.navigate(['/confirmation']);
  }
}
