import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SuccesComponent } from './succes/succes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    InvoiceComponent,
    OrderHistoryComponent,
    SuccesComponent,    
    UserProfileComponent


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class UserModule { }
