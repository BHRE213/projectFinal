import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { UseraccountService } from 'src/app/services/useraccount.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerform:FormGroup=new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    username : new FormControl('',[Validators.required]),
    fullname : new FormControl('',[Validators.required]),
    phonenumber : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
    imagepath:new FormControl()
     })

  constructor(private router: Router,public auth : AuthService,private spinner : NgxSpinnerService,public users:UseraccountService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.users.getAll();
    setTimeout(() =>{
      
      this.spinner.hide();
    },2000);
  }

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.auth.uploadAttachment(fromData);
  }
 


  submit(){
    this.auth.createUser(this.registerform.value);
    this.router.navigate(['login']);
    }
   
    matchError()
    {
      if(this.registerform.controls[
        'password'].value == this.registerform.controls['confirmpassword'].value
      )
      this.registerform.controls['confirmpassword'].setErrors(null);
      else
      this.registerform.controls['confirmpassword'].setErrors({mismatch:true});

    }
    array : any =[{}];
    check()
    {
      this.users.allusers.forEach((element: { email: AbstractControl<any, any>; }) => {
        if(this.registerform.controls['email'].value== element.email)
        {
         this.registerform.controls['email'].setErrors({unvalid:true});
        }
      });
    }
}
