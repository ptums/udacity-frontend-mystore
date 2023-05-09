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
      const productId = params['id'];
      const findItemInCard = this.cartService
        .getCartItems()
        .filter((item) => item.product.id === productId);

      if (findItemInCard.length > 0) {
        this.item = findItemInCard[0];
      } else {
        this.productListService.getProducts().subscribe((products) => {
          const findProduct = products.filter(
            (product) => product.id === parseInt(productId)
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
    });
  }
}
