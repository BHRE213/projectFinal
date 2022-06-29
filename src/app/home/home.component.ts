import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestimonialService } from '../services/testimonial.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public testimonial: TestimonialService,public sharedhttp : ShareddataService,public sitehttp : SitedataService,private spinner : NgxSpinnerService,public sitedata:SitedataService,public shareddata: ShareddataService ) { }

  ngOnInit(): void {
    this.shareddata.getAll();
    this.sitedata.getAll();
    this.testimonial.getAcctest();
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    },2000);
  }

}
