import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
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
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
