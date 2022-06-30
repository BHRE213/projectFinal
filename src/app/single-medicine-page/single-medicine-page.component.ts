import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-single-medicine-page',
  templateUrl: './single-medicine-page.component.html',
  styleUrls: ['./single-medicine-page.component.css']
})
export class SingleMedicinePageComponent implements OnInit {

  constructor(public medicine: MedicineService) { }

  ngOnInit(): void {
   this.medicine.getMedicineById({medicineid:this.medicine.medicineId})
  }

}
