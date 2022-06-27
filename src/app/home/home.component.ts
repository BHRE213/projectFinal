import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedhttp : ShareddataService,public sitehttp : SitedataService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    },2000);
  }

}
