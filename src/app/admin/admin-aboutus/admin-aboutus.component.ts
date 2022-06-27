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

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>


  about: any = {}; // empty obj


  ngOnInit(): void {
    this.aboutUs.getAll();

  }


  CreateForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    txt: new FormControl()
  })

  updatForm: FormGroup = new FormGroup({
    abuotusid: new FormControl('', Validators.required),
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
    this.aboutUs.uploadAttachment(fromData);
  }

  save() {
    this.aboutUs.createAboutus(this.CreateForm.value);
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
          this.aboutUs.deleteAbout(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
  openUpdateDailog(aboutusid1: any, title1: any, txt1: any, image1: any) {
    this.about = {
      aboutusid: aboutusid1,
      title: title1,
      txt: txt1,
      image: image1,
    }

     this.updatForm.controls['abuotusid'].setValue(aboutusid1);
     this.updatForm.controls['image'].setValue(image1);
    this.dialog.open(this.callUpdateDialog)

  }

  updateAboutus() {

    this.aboutUs.UpdateAbput(this.updatForm.value);
    window.location.reload();

  }


}