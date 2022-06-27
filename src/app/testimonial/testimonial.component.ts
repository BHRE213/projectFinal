import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private toastr: ToastrService ,public testomonal:TestimonialService) { }

  ngOnInit(): void {
   this.testomonal.getAll()   
  }

  CreateForm :FormGroup =new FormGroup({
    name:new FormControl('',Validators.required),
    txt:new FormControl('',Validators.required),
    image:new FormControl( )
  })


  
  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.testomonal.uploadAttachment(fromData);
  }

  save(){
    this.testomonal.createTestemonial(this.CreateForm.value);
    this.toastr.success('Thank you for your testimony ❤️ ')
    window.location.reload();
  }
}
