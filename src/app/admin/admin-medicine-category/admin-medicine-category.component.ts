import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-medicine-category',
  templateUrl: './admin-medicine-category.component.html',
  styleUrls: ['./admin-medicine-category.component.css']
})
export class AdminMedicineCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
