import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';


@Component({
  selector: 'app-admin-medicine-category',
  templateUrl: './admin-medicine-category.component.html',
  styleUrls: ['./admin-medicine-category.component.css']
})

export class AdminMedicineCategoryComponent implements OnInit {

  constructor( private dialog: MatDialog) { }
  

  ngOnInit(): void {
  }
  
}