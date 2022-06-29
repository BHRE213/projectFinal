import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor(public medicineService: MedicineService) { }
  name:any='';

  ngOnInit(): void {
    this.medicineService.getAll();
  }

    
  enterName(name:any){   
    this.name=name.target.value;
  }

  search()
  {
    const searches={
      name: this.name.toString()
    };
    if(searches.name.length == 0){
      window.location.reload();
    }else {  this.medicineService.searchByName(searches)}   
  }

  openSingelPage(id:any){
    this.medicineService.medicineId=id;
  }
}
