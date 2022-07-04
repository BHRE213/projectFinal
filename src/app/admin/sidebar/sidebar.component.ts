import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatIconModule} from '@angular/material/icon';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { count } from 'rxjs/internal/operators/count';
import { MedicineService } from 'src/app/services/medicine.service';
import { OrdderService } from 'src/app/services/ordder.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService) { 
    
  }


  ngOnInit(): void {
        setTimeout(() =>{
      this.spinner.hide();
    },2000);
  }

}
