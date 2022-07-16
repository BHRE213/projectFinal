import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrdderService } from 'src/app/services/ordder.service';

@Component({
  selector: 'app-admin-ordder',
  templateUrl: './admin-ordder.component.html',
  styleUrls: ['./admin-ordder.component.css']
})
export class AdminOrdderComponent implements OnInit {
 
  startdate=""
  enddate=""
nul=null
  constructor(public orders:OrdderService, private dialog: MatDialog) { }
  

  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callAcceptDailog') callAcceptDailog!: TemplateRef<any>
  @ViewChild('callRejectDailog') callRejectDailog!: TemplateRef<any>
  ngOnInit(): void {
    this.orders.getAll();
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.orders.deleteorder(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }

  openAcceptDailog(id: number) {
    const dialogRef = this.dialog.open(this.callAcceptDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.orders.acceptorder(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
  openRejectDailog(id: number) {
    const dialogRef = this.dialog.open(this.callRejectDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.orders.rejectorder(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }

 
  search()
  {
    const searches={    
      
      start: this.startdate,
      end: this.enddate
    };
    if(searches.start.length == 0 && searches.end.length==0){
      window.location.reload();
    }
    else if(searches.start.length == 0 && searches.end.length!=0)
    
    {  const m={ 
      start: null,
      end: this.enddate}
    this.orders.searchByaDate(m)}
    else if(searches.start.length != 0 && searches.end.length==0)
    {  const n={
      start: this.startdate}
      this.orders.searchByaDate(n)}
    else if(searches.start.length != 0 && searches.end.length!=0)
    
    {  this.orders.searchByaDate(searches)}
     
  }

}


