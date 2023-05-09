import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/types/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart = {
    items: [],
  };

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart.items = this.cartService.getCartItems();
  }
}
