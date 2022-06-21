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

  constructor(public aboutUs:AboutUsService,private dialog: MatDialog) { }

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>


  ngOnInit(): void {
    this.aboutUs.getAll();
  }

  CreateForm :FormGroup =new FormGroup({
    title:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    txt:new FormControl()
  })

  uploadFile(file:any){
    if(file.length===0){
      return ;
    }
    let fileUpload=<File>file[0];
    // file[0]:'angular.png';
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.aboutUs.uploadAttachment(fromData);
  }

  save(){
   this.aboutUs.createAboutus(this.CreateForm.value);
   window.location.reload();
  }
  
  openCreatedialog(){
    this.dialog.open(this.callCreateDialog)
  }
}
