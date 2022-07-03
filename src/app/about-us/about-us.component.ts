import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutUsService } from '../services/about-us.service';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,public aboutUs: AboutUsService, private dialog: MatDialog,public sitedata:SitedataService,public shareddata: ShareddataService) { }
  about: any = {}; // empty obj


  
    ngOnInit(): void {
      this.shareddata.getAll();
      this.sitedata.getAll();
      this.aboutUs.getAll();
   
  }

}
