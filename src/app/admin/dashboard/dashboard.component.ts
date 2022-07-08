import { Component, OnInit } from '@angular/core';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { OrdderService } from 'src/app/services/ordder.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';
import { UseraccountService } from 'src/app/services/useraccount.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  today = new Date();

  constructor(public user:UseraccountService,public medicine:MedicineService,public order:OrdderService,public branches:PharmacyService) { }

 

  ngOnInit(): void {
    this.branches.getAll();
    this.medicine.getAll();
    this.order.getAll();
    this.user.getAll();

  }

}
