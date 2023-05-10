import { Component } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartItem } from 'src/app/types/cart.interface';
import { Product } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: CartItem[] = [];
  constructor(private productListService: ProductListService) {}

  ngOnInit() {
    this.productListService.getProducts().subscribe((products) => {
      this.productList = products.map((product) => ({
        product,
        quantity: 1,
      }));
    });
  }
}
