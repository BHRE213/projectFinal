import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdderService } from '../../services/ordder.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public order: OrdderService,private route:Router,private spinner: NgxSpinnerService) { }
  useraccountid: any = localStorage.getItem('id')
  totalPrice: any = 0;
  role:any;
   ngOnInit(): void {
    this.spinner.show();
    this.role = localStorage.getItem('role');
    this.order.userCartOrders({
      useraccountid: Number( this.useraccountid),
      orderstatesid: 1
    })
 

    setTimeout(() => {  
      setTimeout(() => {     
        this.spinner.hide();
      }, 900);  
      this.total(); 
      
    }, 1200);

  }

  total() {
    for (let i = 0; i < this.order.ordersInCart.length; i++) {
      this.totalPrice += (this.order.ordersInCart[i].price * this.order.ordersInCart[i].quantity)

    }
  }

  removeFromCart(id:number){
    this.order.deleteorder(id);
    setTimeout(() => {
      window.location.reload();
    }, 500);
 
  }

  openCheckoutPage(){
    this.order.updateUserCartToCheckout({
      useraccountid: Number( this.useraccountid)
    })
    setTimeout(() => {
      this.route.navigate(['user/checkout'])
    }, 500);
  }

}
