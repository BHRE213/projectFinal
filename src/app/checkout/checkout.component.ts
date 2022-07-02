import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from '../services/checkout.service';
import { OrdderService } from '../services/ordder.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public checkoutService: CheckoutService, private spinner: NgxSpinnerService, private router: Router,private toastr: ToastrService) { }
  useraccountid: any = localStorage.getItem('id')
  totalPrice: any = 0;

  ngOnInit(): void {
    this.checkoutService.userCheckoutOrders(
      {
        useraccountid: Number(this.useraccountid),
        orderstatesid: 2
      }
    )
    this.checkoutService.getUserCardData({
      useraccountid: Number(this.useraccountid)
    })
    setTimeout(() => {
      this.total();
    }, 500);
  }

  total() {
    for (let i = 0; i < this.checkoutService.checkoutOrders.length; i++) {
      this.totalPrice += (this.checkoutService.checkoutOrders[i].price * this.checkoutService.checkoutOrders[i].quantity)
    }
  }

  placeOrder() {

    if (this.checkoutService.cardData.balance <= this.totalPrice) {     
      this.toastr.warning('You Dont Have Enough Balance')
    } 
    else {    
      this.spinner.show();
      for (let i = 0; i < this.checkoutService.checkoutOrders.length; i++) {
        this.checkoutService.decreaseMedicenQuantity({
          medicineid: this.checkoutService.checkoutOrders[i].medicineid,
          quantity: this.checkoutService.checkoutOrders[i].quantity
        })
      }
      setTimeout(() => {
        this.spinner.hide();
        this.checkoutService.updateUserCartToPaid({
          useraccountid: Number(this.useraccountid),
        })
        this.router.navigate(['success'])
      }, 1500);

    }
  }
}
