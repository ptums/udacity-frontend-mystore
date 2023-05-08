import { Component } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { Product } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];
  constructor(private productListService: ProductListService) {}

  ngOnInit() {
    this.productListService.getProducts().subscribe((products) => {
      console.log(products);
      this.productList = products;
    });
  }
}
