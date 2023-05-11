import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/types/cart.interface';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() item: CartItem;
  quantity: number = 1;

  constructor(
    private cartService: CartService,
    private productListService: ProductListService
  ) {
    this.item = {
      product: {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: '',
      },
      quantity: 1,
    };
  }

  ngOnInit() {
    if (this.cartService.itemIsInCart(this.item.product.id)) {
      this.item = this.cartService.findItemById(this.item.product.id);
    } else {
      this.setItemById(this.item.product.id);
    }
  }

  addToCart(): void {
    alert(`${this.item.product.name} has been added to your cart!`);
    this.cartService.addToCart(this.item);
  }

  setItemById(productId: number): void {
    this.productListService.getProducts().subscribe((products) => {
      const findProduct = products.filter(
        (product) => product.id === productId
      );

      if (findProduct.length > 0) {
        const item = {
          product: findProduct[0],
          quantity: 1,
        };

        this.item = item;
      }
    });
  }
}
