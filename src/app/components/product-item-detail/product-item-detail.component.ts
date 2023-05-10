import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartItem } from 'src/app/types/cart.interface';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  item: CartItem;

  constructor(
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const productId = parseInt(params['id']);

      if (this.cartService.itemIsInCart(productId)) {
        this.item = this.cartService.findItemById(productId);
      } else {
        this.setProductById(productId);
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.item);
  }

  setProductById(productId: number): void {
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
