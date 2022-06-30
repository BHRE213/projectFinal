import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { SingleMedicinePageComponent } from './single-medicine-page/single-medicine-page.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
