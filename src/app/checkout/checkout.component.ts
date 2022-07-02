import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { OrdderService } from '../services/ordder.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public  checkoutService:CheckoutService) { }
  useraccountid: any = localStorage.getItem('id')
  totalPrice: any = 0;

  ngOnInit(): void {
    this.checkoutService.userCheckoutOrders(
      {
        useraccountid:Number(this.useraccountid),
        orderstatesid:2
      }
    )
    setTimeout(() => {
        this.total();
    }, 500);
  }

  total() {
    for (let i = 0; i < this.checkoutService.checkoutOrders.length; i++) {
      this.totalPrice += (this.checkoutService.checkoutOrders[i].price * this.checkoutService.checkoutOrders[i].quantity)

    }
  }

}
