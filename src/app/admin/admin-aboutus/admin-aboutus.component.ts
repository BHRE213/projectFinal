import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsService } from 'src/app/services/about-us.service';


@Component({
  selector: 'app-admin-aboutus',
  templateUrl: './admin-aboutus.component.html',
  styleUrls: ['./admin-aboutus.component.css']
})
export class AdminAboutusComponent implements OnInit {


  constructor(public aboutUs: AboutUsService, private dialog: MatDialog) { }

  


  ngOnInit(): void {
    this.aboutUs.getAll();

  }

}