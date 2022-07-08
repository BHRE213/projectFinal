import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderHistoryService } from '../../services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(public orderHistory:OrderHistoryService,private spinner: NgxSpinnerService) { }

  useraccountid: any = localStorage.getItem('id');
  totalPrice: any = 0;

  ngOnInit(): void {
    this.spinner.show();
    this.orderHistory.userOrderHistory({
      useraccountid: Number(this.useraccountid)
    })
    setTimeout(() => {
      this.total();
      this.spinner.hide();
    }, 1500);
  }

  total() {
    for (let i = 0; i < this.orderHistory.orders.length; i++) {
      this.totalPrice += (this.orderHistory.orders[i].price * this.orderHistory.orders[i].quantity)
    }
  }

}
