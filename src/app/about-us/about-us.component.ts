import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutUsService } from '../services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,public aboutUs: AboutUsService, private dialog: MatDialog) { }
  about: any = {}; // empty obj


  
    ngOnInit(): void {
      this.aboutUs.getAll();
      this.spinner.show();
      setTimeout(() =>{
        this.spinner.hide();
      },2000);
  }

}
