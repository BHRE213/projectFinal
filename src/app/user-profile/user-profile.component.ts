import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public profile: ProfileService, private dialog: MatDialog) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>

  userValues: any = {}
  useraccountid: any = localStorage.getItem('id')

  ngOnInit(): void {
    this.profile.viewProfile({
      useraccountid: Number(this.useraccountid)

    });



  }
  myprofile: any = {}

  updatForm: FormGroup = new FormGroup({
    useraccountid: new FormControl(),
    fullname: new FormControl(),
    phonenumber: new FormControl(),
    imagepath: new FormControl(),
    password: new FormControl(),

  })
  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.profile.uploadAttachment(fromData);
  }
  openUpdateDailog(idd: any, na: any, us: any, p: any, e: any, im: any, pass: any) {
    this.myprofile = {
      fullname: na,
      useraccountid: idd,
      imagepath: im,
      username: us,
      phonenumber: p,
      email: e

    }
    this.updatForm.controls['useraccountid'].setValue(idd);
    this.updatForm.controls['password'].setValue(pass);
    this.updatForm.controls['imagepath'].setValue(im);
    this.dialog.open(this.callUpdateDialog)

  }

  updateprofile() {

    this.profile.UpdateProfile(this.updatForm.value);
    window.location.reload();

  }


}
