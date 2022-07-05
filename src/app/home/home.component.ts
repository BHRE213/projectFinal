import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestimonialService } from '../services/testimonial.service';
import { MedicineCategoryService } from '../services/medicine-category.service';
import { MedicineService } from '../services/medicine.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public testimonial: TestimonialService,public sharedhttp : ShareddataService,public sitehttp : SitedataService,private spinner : NgxSpinnerService,public sitedata:SitedataService,public shareddata: ShareddataService,public medicineCategoryService:MedicineCategoryService,public medicineServace:MedicineService,private router:Router ) { }

  ngOnInit(): void {
    this.shareddata.getAll();
    this.sitedata.getAll();
    this.testimonial.getAcctest();  
    this.medicineCategoryService.getAll()
  }
  getMedicineByCid(id:any){
    this.medicineServace.categoryId=id;
    this.router.navigate(['medicine']);
  }
}
