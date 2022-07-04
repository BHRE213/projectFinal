import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MedicineComponent } from './medicine/medicine.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { InvoiceService } from './services/invoice.service';
import { SingleMedicinePageComponent } from './single-medicine-page/single-medicine-page.component';
import { SuccesComponent } from './succes/succes.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserMapComponent } from './user-map/user-map.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

{
  path:'contactus',
  component:ContactUsComponent
},
{
  path:'testimonal',
  component:TestimonialComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'auth',
  loadChildren:() =>AuthModule

},
{
  path:'about',
  component:AboutUsComponent

},
{
  path:'admin',
  loadChildren:() =>AdminModule,
 canActivate:[AuthorizationGuard]

},{
  path:'medicine',
  component:MedicineComponent
},
{
  path:'singleMedicine',
  component:SingleMedicinePageComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'checkout',
  component:CheckoutComponent
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
  path:'userProfile',
  component:UserProfileComponent
}
,
{
  path:'map',
  component:UserMapComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
