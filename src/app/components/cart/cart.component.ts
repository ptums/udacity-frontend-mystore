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
    this.total = this.setCartTotal(this.cart.items);
  }

  ngOnChanges() {
    console.log('test..');
  }

  setCartTotal(items: CartItem[]): string {
    let results = 0;

    items.forEach((item: CartItem) => {
      results = results += item.product.price * item.quantity;
    });

    return results.toFixed(2);
  }

  increaseQuantity(event: MouseEvent, item: CartItem): void {
    const quantity = (event?.target as HTMLInputElement).getAttribute(
      'ng-reflect-model'
    );
    console.log({
      quantity,
      item,
    });
  }
}
