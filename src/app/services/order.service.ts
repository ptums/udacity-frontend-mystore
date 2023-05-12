import { Injectable } from '@angular/core';
import { Order } from '../types/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  customerOrder: Order = {
    fullName: '',
    orderTotal: '',
  };

  constructor() {}

  setCustomerOrder(customer: Order): void {
    this.customerOrder = customer;
  }
}
