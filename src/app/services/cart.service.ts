import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../types/cart.interface';
import { Product } from '../types/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {
    items: [],
  };

  constructor() {}

  addToCart(item: CartItem): void {
    this.cart.items.push(item);
  }

  removeFromCart(item: CartItem): void {
    this.cart.items.filter(
      (cartItem) => cartItem.product.id !== item.product.id
    );
  }

  itemInCart(item: CartItem): void {
    this.cart.items.filter(
      (cartItem) => cartItem.product.id === item.product.id
    );
  }

  getCartItems(): CartItem[] {
    return this.cart.items;
  }
}
