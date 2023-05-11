import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/types/order.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  confirmationOrder: Order;

  constructor(private customerOrder: OrderService) {
    this.confirmationOrder = {
      fullName: '',
      address: '',
      email: '',
      creditCard: '',
    };
  }

  ngOnInit() {
    this.confirmationOrder = this.customerOrder.customerOrder;
  }
}
