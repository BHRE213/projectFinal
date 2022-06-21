import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';

const routes: Routes = [
 {
  path:'about',
  component:AdminAboutusComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
