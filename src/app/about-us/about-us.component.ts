import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService) { }

    ngOnInit(): void {
      this.spinner.show();
      setTimeout(() =>{
        this.spinner.hide();
      },2000);
  }

}
