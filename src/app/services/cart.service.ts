import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../types/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {
    items: [],
  };

  constructor() {}

  addToCart(item: CartItem): void {
    if (this.itemIsInCart(item.product.id)) {
      this.removeFromCart(item);
      this.cart.items.push(item);
    } else {
      this.cart.items.push(item);
    }
  }

  itemIsInCart(itemId: number): boolean {
    return !!this.cart.items.filter((i: CartItem) => {
      return i.product.id == itemId;
    }).length;
  }

  findItemById(itemId: number): CartItem {
    return this.cart.items.filter((i: CartItem) => {
      return i.product.id == itemId;
    })[0];
  }
  removeFromCart(item: CartItem): void {
    const itemList = this.cart.items.filter(
      (i) => i.product.id !== item.product.id
    );
    this.cart.items = itemList;
  }

  getCartItems(): CartItem[] {
    return this.cart.items;
  }
}
