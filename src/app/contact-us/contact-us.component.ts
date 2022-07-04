import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AboutUsService } from '../services/about-us.service';
import { ContactUsService } from '../services/contact-us.service';
import { FooterService } from '../services/footer.service';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 

  
  
  

  constructor(private contactusService:ContactUsService,private router:Router, public aboutUs:AboutUsService,public footer:FooterService,private toastr: ToastrService,public shareddata: ShareddataService,private spinner : NgxSpinnerService) { }

  CreateForm :FormGroup =new FormGroup({
    title:new FormControl('',Validators.required),
    feedback:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber:new FormControl(''),    
  })



  ngOnInit(): void {
    this.aboutUs.getAll();
    this.footer.getAll();
    this.shareddata.getAll();
  }


  send(){
    this.spinner.show();
    this.contactusService.create(this.CreateForm.value);
  
   setTimeout(() => { 
    this.spinner.hide();     
    this.toastr.success('Thank you for contacting us ❤️ ')     
    window.location.reload();
    }, 1500);

  }




}

