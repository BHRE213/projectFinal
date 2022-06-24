import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { AdminOrdderComponent } from './admin-ordder/admin-ordder.component';
import { AdminUseraccountComponent } from './admin-useraccount/admin-useraccount.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminTestimonialComponent } from './admin-testimonial/admin-testimonial.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
