import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(public profile:ProfileService, private dialog: MatDialog) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>

  ngOnInit(): void {

   const id:number=1
   this.profile.viewProfile(id);
   
  }
myprofile:any={}

updatForm: FormGroup = new FormGroup({
  useraccountid : new FormControl('', Validators.required),
 fullname: new FormControl('', Validators.required),
 phonenumber: new FormControl(),
 image: new FormControl(),
 username: new FormControl('', Validators.required),
 email: new FormControl('', Validators.required)

})
uploadFile(file: any) {
  if (file.length === 0) {
    return;
  }
  let fileUpload = <File>file[0];
  // file[0]:'angular.png';
  const fromData = new FormData();
  fromData.append('file', fileUpload, fileUpload.name);
  this.myprofile.uploadAttachment(fromData);
}
openUpdateDailog(idd: any, na: any, us: any,p:any,e:any,im: any) {
  this.myprofile = {
    name:na,
    useraccountid:idd,

    image: im,
    username: us,
    phonenumber:p,
  email:e
  }

   this.updatForm.controls['useraccountid'].setValue(idd);
   this.updatForm.controls['fullname'].setValue(na);
   this.updatForm.controls['username'].setValue(us);
   this.updatForm.controls['phonenumber'].setValue(p);
   this.updatForm.controls['email'].setValue(e);
  
   this.updatForm.controls['image'].setValue(im);
  this.dialog.open(this.callUpdateDialog)

}

updateprofile() {

  this.profile.UpdateProfile(this.updatForm.value);
  window.location.reload();

}



}


