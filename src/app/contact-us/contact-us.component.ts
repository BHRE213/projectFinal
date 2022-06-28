import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactUsService } from '../services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,public contact:ContactUsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    },2000);
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
