import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UseraccountService } from 'src/app/services/useraccount.service';


@Component({
  selector: 'app-admin-useraccount',
  templateUrl: './admin-useraccount.component.html',
  styleUrls: ['./admin-useraccount.component.css']
})
export class AdminUseraccountComponent implements OnInit {

  constructor(public users:UseraccountService, private dialog: MatDialog) { }


  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>

  ngOnInit(): void {
    this.users.getAll();
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.users.deleteuser(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
}
