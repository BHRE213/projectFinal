import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-admin-shareddatum',
  templateUrl: './admin-shareddatum.component.html',
  styleUrls: ['./admin-shareddatum.component.css']
})
export class AdminShareddatumComponent implements OnInit {

  constructor(public shareddata: ShareddataService, private dialog: MatDialog) { }

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>


  shared: any = {}; // empty obj


  ngOnInit(): void {
    this.shareddata.getAll();

  }

  CreateForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    txt: new FormControl()
  })

  updatForm: FormGroup = new FormGroup({
    shareddataid: new FormControl('', Validators.required),
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
    this.shareddata.uploadAttachment(fromData);
  }

  save() {
    this.shareddata.createAboutus(this.CreateForm.value);
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
          this.shareddata.deleteAbout(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
  openUpdateDailog(Shareddataid1: any, title1: any, txt1: any, image1: any) {
    this.shared = {
      shareddataid: Shareddataid1,
      title: title1,
      txt: txt1,
      image: image1,
    }

     this.updatForm.controls['shareddataid'].setValue(Shareddataid1);
     this.updatForm.controls['image'].setValue(image1);
    this.dialog.open(this.callUpdateDialog)

  }

  updateShared() {

    this.shareddata.UpdateAbput(this.updatForm.value);
    window.location.reload();

  }



}
