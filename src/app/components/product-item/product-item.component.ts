import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/types/cart.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit() {
    const item = this.cartService
      .getCartItems()
      .filter((item) => item.product.id === this.product.id);

    if (item.length > 0) {
      this.quantity = item[0].product.id;
    }
  }

  addToCart(): void {
    const product = this.product;
    const quantity = this.quantity;

    this.cartService.addToCart({
      product,
      quantity,
    });
  }
}
