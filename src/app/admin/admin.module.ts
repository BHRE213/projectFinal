import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAboutusComponent } from './admin-aboutus/admin-aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
import { AdminMedicineCategoryComponent } from './admin-medicine-category/admin-medicine-category.component';
import { AdminOrdderComponent } from './admin-ordder/admin-ordder.component';
import { AdminPharmaceBranchComponent } from './admin-pharmacy-branch/admin-pharmace-branch.component';
import { AdminTestimonialComponent } from './admin-testimonial/admin-testimonial.component';
import { AdminUseraccountComponent } from './admin-useraccount/admin-useraccount.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminShareddatumComponent } from './admin-shareddatum/admin-shareddatum.component';
import { AdminSitedatumComponent } from './admin-sitedatum/admin-sitedatum.component';


@NgModule({
  declarations: [
   
  
    AdminAboutusComponent,
             AdminContactusComponent,
             AdminFooterComponent,
             AdminMedicineComponent,
             AdminMedicineCategoryComponent,
             AdminOrdderComponent,
             AdminPharmaceBranchComponent,
             AdminShareddatumComponent,
             AdminSitedatumComponent,
             AdminTestimonialComponent,
             AdminUseraccountComponent,
             SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
