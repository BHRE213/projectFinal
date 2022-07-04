import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/services/about-us.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FooterService } from 'src/app/services/footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( public aboutUs:AboutUsService,public footer:FooterService) { }
  year =new Date().getFullYear();
 

  ngOnInit(): void {
  
  }

  

}
