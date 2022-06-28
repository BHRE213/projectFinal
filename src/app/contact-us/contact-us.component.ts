import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

import { ContactUsService } from '../services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  constructor(private contactusService:ContactUsService,private router:Router, private toastr: ToastrService) { }

  CreateForm :FormGroup =new FormGroup({
    title:new FormControl('',Validators.required),
    feedback:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber:new FormControl(''),    
  })

  constructor(private spinner : NgxSpinnerService,public contact:ContactUsService, private dialog: MatDialog) { }


  ngOnInit(): void {
  }


  send(){
    this.contactusService.create(this.CreateForm.value);
    this.toastr.success('Thank you for contacting us ❤️ ')
    window.location.reload();
  }

  CreateForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phonenumber: new FormControl()
  })
create (){

  this.contact.createcontact(this.CreateForm.value)
}


}

