import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/types/order.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  confirmationOrder: Order;
  orderSuccess: boolean;

  constructor(private customerOrder: OrderService, private router: Router) {
    this.confirmationOrder = {
      fullName: '',
      orderTotal: '',
    };

    this.orderSuccess = false;
  }

  ngOnInit() {
    this.confirmationOrder = this.customerOrder.customerOrder;
    const emptyOrder = Object.values(this.customerOrder.customerOrder).every(
      (i) => i === ''
    );

    if (!emptyOrder) {
      this.orderSuccess = true;
    }

    if (emptyOrder) {
      this.router.navigateByUrl('/');
    }
  }
}
