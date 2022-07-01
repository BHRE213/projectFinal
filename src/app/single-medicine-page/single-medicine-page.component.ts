import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { OrdderService } from '../services/ordder.service';

@Component({
  selector: 'app-single-medicine-page',
  templateUrl: './single-medicine-page.component.html',
  styleUrls: ['./single-medicine-page.component.css']
})
export class SingleMedicinePageComponent implements OnInit {

  quantity:number =1;
  constructor(public medicine: MedicineService , private order:OrdderService) { }

  ngOnInit(): void {
   this.medicine.getMedicineById({medicineid:this.medicine.medicineId})
  }

  increase(){
    this.quantity = this.quantity +1
   
  }
  decrease(){
    if(this.quantity !=0){
    this.quantity = this.quantity -1
    }  
  }

  addToCart(id:any){
 this.order.createOrder({
  quantity:this.quantity,
  orderdate: new Date(),
  orderstatesid:1,
  useraccountid:1,
  medicineid: id
 })
  }

}
