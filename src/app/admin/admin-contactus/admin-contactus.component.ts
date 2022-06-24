import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-admin-contactus',
  templateUrl: './admin-contactus.component.html',
  styleUrls: ['./admin-contactus.component.css']
})
export class AdminContactusComponent implements OnInit {

  constructor(public contact:ContactUsService,private dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>

  ngOnInit(): void {
    this.contact.getAll();
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.contact.deletecontact(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }

}
