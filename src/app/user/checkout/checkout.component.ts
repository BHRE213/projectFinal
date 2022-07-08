import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from '../../services/checkout.service';
import { OrdderService } from '../../services/ordder.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public checkoutService: CheckoutService, private spinner: NgxSpinnerService, private router: Router,private toastr: ToastrService) { }
  useraccountid: any = localStorage.getItem('id')
  totalPrice: any = 0;
  flag:boolean = true;

  ngOnInit(): void {
    this.spinner.show();
   
    this.checkoutService.getUserById(
      { useraccountid: Number(this.useraccountid)}
    )
    this.checkoutService.userCheckoutOrders(
      {
        useraccountid: Number(this.useraccountid),
        orderstatesid: 2
      }
    )
    
    setTimeout(() => {  
      setTimeout(() => {     
        this.total();
      }, 1000);   
      this.spinner.hide();
    }, 1500);
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
      this.checkoutService.updateCardBalance({
        balance:this.totalPrice,
        cardid: this.checkoutService.cardData.cardid
      })
      for (let i = 0; i < this.checkoutService.checkoutOrders.length; i++) {
        this.checkoutService.decreaseMedicenQuantity({
          medicineid: this.checkoutService.checkoutOrders[i].medicineid,
          quantity: this.checkoutService.checkoutOrders[i].quantity
        })
      }
      this.checkoutService.email({
        fullname:this.checkoutService.profileData.fullname,
        email:this.checkoutService.profileData.email,
        total:this.totalPrice
      })
      this.toastr.success("Your Purchases Have Been Successed");
      setTimeout(() => {
        this.spinner.hide();
        this.checkoutService.updateUserCartToPaid({
          useraccountid: Number(this.useraccountid),
        })
        this.router.navigate(['user/success'])
      }, 1500);

    }
  }

  cancel(){
    this.checkoutService.returnStatusToIncard(
      {  useraccountid: Number(this.useraccountid)}
    )
    setTimeout(()=>{
      this.router.navigate(['cart'])
    },300)
    
  }

  CreateForm: FormGroup = new FormGroup({
    cvb: new FormControl(),
    iban: new FormControl(),
    expiredate: new FormControl()
  })
  CheckCard(){
    this.spinner.show();
    this.checkoutService.getUserCardData(this.CreateForm.value);   

    setTimeout(()=>{
      if(this.checkoutService.cardData !=null){
        this.flag=false;
        this.spinner.hide();
        this.toastr.success("Your Cadr Data Is valid");
      }else if(this.checkoutService.cardData == null ){    
        this.spinner.hide();   
        this.toastr.warning("Your Cadr Data Is Invalid");    
      };
    },500);
  }
}
