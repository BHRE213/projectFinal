import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { AdminOrdderComponent } from './admin-ordder/admin-ordder.component';
import { AdminUseraccountComponent } from './admin-useraccount/admin-useraccount.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminTestimonialComponent } from './admin-testimonial/admin-testimonial.component';
import { AdminPharmaceBranchComponent } from './admin-pharmacy-branch/admin-pharmace-branch.component';

import { AdminShareddatumComponent } from './admin-shareddatum/admin-shareddatum.component';
import { AdminSitedatumComponent } from './admin-sitedatum/admin-sitedatum.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';

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
 },
  {
  path:'medicine',
  component:AdminMedicineComponent
 },
 {
  path:'shareddata',
  component:AdminShareddatumComponent
 },
 {
  path:'sitedata',
  component:AdminSitedatumComponent
 },
];
@NgModule({
  exports: [RouterModule]
})
export class AdminRoutingModule { }
