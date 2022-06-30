import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
        setTimeout(() =>{
      this.spinner.hide();
    },2000);
  }

}
