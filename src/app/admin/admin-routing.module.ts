import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { AdminOrdderComponent } from './admin-ordder/admin-ordder.component';
import { AdminUseraccountComponent } from './admin-useraccount/admin-useraccount.component';
import { SidebarComponent } from './sidebar/sidebar.component';
<<<<<<< HEAD
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
=======
import { AdminTestimonialComponent } from './admin-testimonial/admin-testimonial.component';
import { AdminPharmaceBranchComponent } from './admin-pharmacy-branch/admin-pharmace-branch.component';
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> 8901fb5ead809ed3f32d92b2701ffb5bad199912
>>>>>>> 3d108b4c89774d5ea2021ee23242b27f96f3ec2e

const routes: Routes = [
 {
  path:'about',
  component:AdminAboutusComponent
 },
 {
  path:'footer',
  component:AdminFooterComponent
 },
 {
  path:'pharmacy',
  component:AdminPharmaceBranchComponent
 },
 {
  path:'sidebar',
  component:SidebarComponent
 },
 {
  path:'contact',
  component:AdminContactusComponent
 },
 {
  path:'order',
  component:AdminOrdderComponent
 },
 {
  path:'user',
  component:AdminUseraccountComponent
 },
 {
  path:'adminTestimonial',
  component:AdminTestimonialComponent
 }
 {
  path:'medicine',
  component:AdminMedicineComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
