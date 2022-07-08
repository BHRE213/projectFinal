import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SuccesComponent } from './succes/succes.component';
import { UserMapComponent } from '../user-map/user-map.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'success',
    component:SuccesComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  },
  {
    path:'orderHistory',
    component:OrderHistoryComponent
  }
  ,
  {
    path:'Profile',
    component:UserProfileComponent
  }
  ,
  {
    path:'map',
    component:UserMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
