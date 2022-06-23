import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
<<<<<<< HEAD
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
=======
import { AdminUseraccountComponent } from './admin-useraccount/admin-useraccount.component';
>>>>>>> bd6399de41aacd28d98c75a8b5de4784f52abb50
import { SidebarComponent } from './sidebar/sidebar.component';

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
  path:'user',
  component:AdminUseraccountComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
