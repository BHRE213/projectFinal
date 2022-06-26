import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SitedataService } from 'src/app/services/sitedata.service';
@Component({
  selector: 'app-admin-sitedatum',
  templateUrl: './admin-sitedatum.component.html',
  styleUrls: ['./admin-sitedatum.component.css']
})
export class AdminSitedatumComponent implements OnInit {

  constructor(public sitedata: SitedataService, private dialog: MatDialog) { }

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>


  site: any = {}; // empty obj

  ngOnInit(): void {
    this.sitedata.getAll();
  }

  CreateForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    txt: new FormControl()
  })

  updatForm: FormGroup = new FormGroup({
    sitedataid: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    txt: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),

  })

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.sitedata.uploadAttachment(fromData);
  }

  save() {
    this.sitedata.createAboutus(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.dialog.open(this.callCreateDialog)
  }

  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.sitedata.deleteAbout(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }

  openUpdateDailog(Sitedataid1: any, title1: any, txt1: any, image1: any) {
    this.site = {
      sitedataid: Sitedataid1,
      title: title1,
      txt: txt1,
      image: image1,
    }
    this.updatForm.controls['sitedataid'].setValue(Sitedataid1);
    this.updatForm.controls['image'].setValue(image1);
   this.dialog.open(this.callUpdateDialog)

 }

 updateSite() {

  this.sitedata.UpdateAbput(this.updatForm.value);
  window.location.reload();

}
}
