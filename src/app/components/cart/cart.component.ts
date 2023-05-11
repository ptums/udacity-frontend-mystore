import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/types/cart.interface';

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

  constructor(private cartService: CartService) {
    this.total = '0';
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
}
