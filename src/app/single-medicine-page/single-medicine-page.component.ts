import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../services/medicine.service';
import { OrdderService } from '../services/ordder.service';

@Component({
  selector: 'app-single-medicine-page',
  templateUrl: './single-medicine-page.component.html',
  styleUrls: ['./single-medicine-page.component.css']
})
export class SingleMedicinePageComponent implements OnInit {

  quantity: number = 1;
  constructor(public medicine: MedicineService, private order: OrdderService ,private router:Router,private toastr: ToastrService) { }
  useraccountid: any = localStorage.getItem('id')

  ngOnInit(): void {
    this.medicine.getMedicineById({ medicineid: this.medicine.medicineId })
    setTimeout(() => {
      this.order.checkMedicineInCart({
        useraccountid: Number(this.useraccountid),
        medicineid: this.medicine.medicineId
      })
    }, 1000);

  }

  increase() {
    if(this.quantity< this.medicine.singleMedicineData.medicinenumber){
    this.quantity = this.quantity + 1
    }else{
      this.toastr.warning('We Dont Have Enough Amount Of This Medicine')
    }

  }
  decrease() {
    if (this.quantity != 0) {
      this.quantity = this.quantity - 1
    }
  }

  addToCart(id: any) {

    console.log('data', this.order.checkMedicine)
    if (this.order.checkMedicine == null) {
      this.order.createOrder({
        quantity: this.quantity,
        orderdate: new Date(),
        orderstatesid: 1,
        useraccountid: 1,
        medicineid: id
      })
    } else {
      this.order.updateMedicineInCart({
        quantity: this.quantity,
        useraccountid: 1,
        medicineid: id
      })
    }
    this.router.navigate(['medicine'])

  }

}
